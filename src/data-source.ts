import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import "dotenv/config";

const prodConfig = new DataSource({
  type: "postgres",
  ssl: { rejectUnauthorized: false },
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: ["migration/**/*.ts"],
  subscribers: [],
});

const devConfig = new DataSource({
  type: "postgres",
  ssl: false,
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: ["migration/**/*.ts"],
  subscribers: [],
});

const AppDataSource =
  process.env.NODE_ENV === "production" ? prodConfig : devConfig;

export default AppDataSource;
