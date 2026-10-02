FROM node:26-slim

RUN apt-get update \
  && apt-get install --yes --no-install-recommends sqlite3 \
  && rm -rf /var/lib/apt/lists/* \
  && npm install --global pnpm@9.14.4

RUN npm install --global --force corepack@latest
RUN corepack enable

WORKDIR /app
COPY pnpm-lock.yaml ./

ADD . ./
RUN pnpm install

RUN mkdir /app/db
RUN sqlite3 ./db/sqlite.db

RUN pnpm drizzle-kit push --config=src/lib/server/db/drizzle.config.ts
RUN pnpm run build

EXPOSE 3000
VOLUME [ "/app/output" ]

CMD [ "node", "build", "--port", "3000", "--host" ]
