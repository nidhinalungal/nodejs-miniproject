import express from "express";
import "reflect-metadata";
import { container } from "./inversify.config";
import { InversifyExpressServer } from "inversify-express-utils";
import "./application/controllers/business_unit/businessUnitController";
import { DataSource } from "typeorm";
import { TYPES } from "./application/utilities/types";
import { dataSource } from "./config/dataSource";

const port = process.env.PORT || 8000;

export async function bootstrap() {
  const server = new InversifyExpressServer(container);
  server.setConfig((app) => {
    app.use(express.json());
  });
  const serverInstance = server.build();

  initiateDBconnection();
  serverInstance.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

  function initiateDBconnection() {
    try {
      dataSource.initialize();
      if (dataSource.isInitialized) {
        console.info("connected to the database successfully");
      }
      container.bind<DataSource>(TYPES.DataSource).toConstantValue(dataSource);
    } catch (error) {
      console.error("Error connecting to the database", error);
    }
  }
}
