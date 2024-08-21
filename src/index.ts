import { container } from "./inversify.config";

async function index() {
  const IoCModule = require("./inversify.config");
  container.load(IoCModule.referenceDataIoCModule());
  const bootstrap = require("./server");

  await bootstrap.bootstrap();
}

index();
