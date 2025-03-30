import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Example } from './src/example/example.entity';
import * as dotenv from 'dotenv';

dotenv.config(); // .env を読み込む

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Example],
  migrations: ['src/migrations/*.ts'],
  synchronize: true, // マイグレーションを使用する場合は false にする
  logging: true,
});
