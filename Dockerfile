FROM node:26-slim

RUN apk update && apk upgrade
RUN apk add --no-cache sqlite

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
