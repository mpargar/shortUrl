import "reflect-metadata";
import { DataSource } from "typeorm";
import { join } from "path";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "",
    database: "short_url",
    synchronize: true,
    logging: true,
    entities: [join(__dirname, "db/entity/*{.ts,.js}" )],
    migrations: [join(__dirname, "db/migration/*{.ts,.js}")],
});