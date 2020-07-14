export const REDIS_PORT = Number(process.env.REDIS_PORT) || 6379;
export const REDIS_HOST = process.env.REDIS_HOST || '127.0.0.1';
export const REDIS_CACHED_ALIVE = Number(process.env.REDIS_CACHED_ALIVE) || 3600;
export const PORT = process.env.PORT || 3000;
