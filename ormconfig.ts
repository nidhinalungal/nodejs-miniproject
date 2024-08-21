import { DataSource, DataSourceOptions } from "typeorm";

export const connectionSource = new DataSource({
  migrationsTableName: "migrations",
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  //   driver: require("mysql2"),
  password: "department",
  database: "miniproject",
  logging: true,
  synchronize: false,
  entities: ["src/infrastructure/data_access/repositories/models/*.ts"],
  migrations: ["src/infrastructure/data_access/migrations/*.ts"],
} as DataSourceOptions);
