import { DataSource } from "typeorm";
import mysqlConfig from "./mysql-config.json";

export const dataSource = new DataSource({
  type: "mysql",
  host: mysqlConfig.host,
  port: mysqlConfig.port,
  username: mysqlConfig.username,
  password: mysqlConfig.password,
  database: mysqlConfig.database,
  entities: ["src/infrastructure/data_access/repositories/models/*.ts"],
  synchronize: false,
  logging: true,
  migrations: ["src/infrastructure/data_access/migrations/*.ts"],
});
