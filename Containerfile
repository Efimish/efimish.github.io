FROM docker.io/oven/bun as builder
WORKDIR /usr/src/app
COPY package.json bun.lock .
RUN bun install
COPY . .
RUN bun run build

FROM ghcr.io/efimish/darkhttpd
WORKDIR /srv
COPY --from=builder /usr/src/app/dist/ .
