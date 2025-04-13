# Whitelist

This is a web app and service allowing users to whitelist themselves on our Minecraft server. Users sign in using their D-sek account and can then connect their Minecraft username, which is checked against Mojangs public API. Every ten minutes, the service creates a `whitelist.json` file, which can be synced into the server folder of the Minecraft server using cron.

![builtwith][builtwith]
[![svelte][svelte]][svelte-url]
[![daisy][daisy]][daisy-url]
[![typescript][typescript]][typescript-url]
[![drizzle][drizzle]][drizzle-url]
[![zod][zod]][zod-url]

![using][using]
[![node][node]][node-url]
[![pnpm][pnpm]][pnpm-url]
[![docker][docker]][docker-url]

## Usage

Create a `.env` file, following the example values in the `.env.example` file.

The output file is written to `./output/whitelist.json`

## Developing

Once you've created a project and installed dependencies with `pnpm install`, start a development server:

```bash
pnpm dev
```

## Building and deploying

In production, the web app runs in a Docker (Podman) container. To build an image, use the followning command.

```bash
docker build .
```

This can then be pushed to our image repo.

[builtwith]: https://img.shields.io/badge/built%20with-f280a1?style=for-the-badge
[using]: https://img.shields.io/badge/using-f280a1?style=for-the-badge
[typescript]: https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[svelte]: https://img.shields.io/badge/svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white
[svelte-url]: https://svelte.dev/
[daisy]: https://img.shields.io/badge/daisyui-107f65?style=for-the-badge&logo=data:image/svg+xml;base64,Cjxzdmcgd2lkdGg9IjEwMjQiIGhlaWdodD0iMTAyNCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMjU2IiB5PSI2NzAuNzIiIHdpZHRoPSI1MTIiIGhlaWdodD0iMjU2IiByeD0iMTI4IiBmaWxsPSIjMUFEMUE1Ii8+CjxjaXJjbGUgY3g9IjUxMiIgY3k9IjM1My4yOCIgcj0iMjU2IiBmaWxsPSJ3aGl0ZSIvPgo8Y2lyY2xlIGN4PSI1MTIiIGN5PSIzNTMuMjgiIHI9IjI2MSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIgc3Ryb2tlLXdpZHRoPSIxMCIvPgo8Y2lyY2xlIGN4PSI1MTIiIGN5PSIzNTMuMjgiIHI9IjExNC42ODgiIGZpbGw9IiNGRjk5MDMiLz4KPC9zdmc+Cg==
[daisy-url]: https://daisyui.com/
[expo]: https://img.shields.io/badge/expo-000020?style=for-the-badge&logo=expo&logoColor=white
[expo-url]: https://expo.dev/
[drizzle]: https://img.shields.io/badge/Drizzle-C5F74F?style=for-the-badge&logo=Drizzle&logoColor=black
[drizzle-url]: https://orm.drizzle.team/
[pnpm]: https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white
[pnpm-url]: https://pnpm.io/
[zod]: https://img.shields.io/badge/zod-274d82?style=for-the-badge&logo=zod
[zod-url]: https://zod.dev/
[docker]: https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white
[docker-url]: https://www.docker.com/
[pm2]: https://img.shields.io/badge/pm2-2B037A?style=for-the-badge&logo=pm2&logoColor=white
[pm2-url]: https://pm2.keymetrics.io/
[node]: https://img.shields.io/badge/node-339933?style=for-the-badge&logo=node.js&logoColor=white
[node-url]: https://nodejs.org/
