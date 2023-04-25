export const DB_TYPE = (process.env.DB_TYPE || 'sqlite') as 'postgres' | 'sqlite' | 'mysql';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = parseInt(process.env.DB_PORT || "5432", 10);
export const DB_USER = process.env.DB_USER || 'postgres';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'postgres';
export const DB_NAME = process.env.DB_NAME || 'db.sqlite';

export const CREATE_SEED_DATA = (process.env.CREATE_SEED_DATA || true) === true;
