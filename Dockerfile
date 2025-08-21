FROM node:lts-alpine

RUN corepack enable

WORKDIR /app
COPY pnpm-lock.yaml ./

ADD . ./
RUN pnpm install

RUN pnpm drizzle-kit generate --config=src/lib/server/db/drizzle.config.ts
RUN pnpm drizzle-kit migrate --config=src/lib/server/db/drizzle.config.ts
RUN pnpm run build

RUN mkdir /app/db

EXPOSE 3000
VOLUME [ "/app/output" ]

CMD [ "node", "build", "--port", "3000", "--host" ]
