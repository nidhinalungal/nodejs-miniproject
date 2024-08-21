import { Container, ContainerModule } from "inversify";
// import { Mediator } from "./application/utilities/mediators/business_unit/mediator";
import { IBusinessUnitProps } from "./application/controllers/business_unit/dtos/IBusinessUnitProps";
// import { IMediator } from "./application/utilities/mediators/business_unit/IMediator";
import { TYPES } from "./application/utilities/types";
import { IBusinessUnitService } from "./application/services/interfaces/IBusinessUnitService";
import { IBusinessUnitRepository } from "./infrastructure/abstract_repos/IBusinessUnitRepository";
import { BusinessUnitService } from "./application/services/businessUnitService";
import { BusinessUnitRepository } from "./infrastructure/data_access/repositories/businessUnitRepository";
import { IDistrictRepository } from "./infrastructure/abstract_repos/IDistrictRepository";
import { DistrictRepository } from "./infrastructure/data_access/repositories/districtRepository";
import { CreateBusinessUnitHandler } from "./application/handlers/createBusinessUnitHandler";
import { Mediator } from "./application/utilities/mediator/mediator";
import { IMediator } from "./application/utilities/mediator/IMediator";
import { GetAllBusinessUnitsHandler } from "./application/handlers/getAllBusinessUnitsHandler";
import { GetBusinessUnitByIdHandler } from "./application/handlers/getBusinessUnitByIdHandler";

export const container = new Container();
export const referenceDataIoCModule = () =>
  new ContainerModule((bind) => {
    bind<IBusinessUnitService>(TYPES.IBusinessUnitService)
      .to(BusinessUnitService)
      .inSingletonScope();
    bind<IBusinessUnitRepository>(TYPES.IBusinessUnitRepository).to(
      BusinessUnitRepository
    ).inSingletonScope;
    bind<IDistrictRepository>(TYPES.IDistrictRepository).to(DistrictRepository)
      .inSingletonScope;
    bind<CreateBusinessUnitHandler>(TYPES.CreateBusinessUnitHandler).to(CreateBusinessUnitHandler)
      .inTransientScope;
    bind<GetAllBusinessUnitsHandler>(TYPES.GetAllBusinessUnitsHandler).to(GetAllBusinessUnitsHandler)
      .inTransientScope;
    bind<GetBusinessUnitByIdHandler>(TYPES.GetBusinessUnitByIdHandler).to(GetBusinessUnitByIdHandler)
      .inTransientScope;

    const mediator = new Mediator(
      <T>(serviceIdentifier: symbol): T => {
        return container.get<T>(serviceIdentifier);
      }
    );
    bind<IMediator<any, any>>(
      TYPES.IMediator
    ).toConstantValue(mediator);
  });
