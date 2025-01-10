FROM oven/bun:1.1.38 AS builder

WORKDIR /app

COPY package.json bun.lockb ./

RUN apt-get update && apt-get install -y unzip

RUN bun install

COPY . .

RUN bun run build

FROM oven/bun:1.1.38

WORKDIR /app

COPY --from=builder /app/dist /app/dist

RUN bun add serve

CMD ["bun", "run", "serve", "--", "-s", "dist", "-l", "8080"]

EXPOSE 8080