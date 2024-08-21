import { inject, injectable } from "inversify";
import { TYPES } from "../utilities/types";
import { IRequestHandler } from "./interfaces/IRequestHandler";
import { IBusinessUnitRequest } from "../controllers/business_unit/dtos/IBusinessUnitRequest";
import { IBusinessUnitProps } from "../controllers/business_unit/dtos/IBusinessUnitProps";
import { IBusinessUnitService } from "../services/interfaces/IBusinessUnitService";
import { IDistrictRepository } from "../../infrastructure/abstract_repos/IDistrictRepository";
import { DistrictEntity } from "../../infrastructure/data_access/repositories/models/district";
import { BusinessUnitEntity } from "../../infrastructure/data_access/repositories/models/business-unit";

@injectable()
export class GetAllBusinessUnitsHandler
  implements IRequestHandler<IBusinessUnitProps[], Request>
{
  constructor(
    @inject(TYPES.IBusinessUnitService)
    private businessUnitService: IBusinessUnitService
  ) {}

  public async handle(request: Request): Promise<IBusinessUnitProps[]> {
    const businessUnits = await this.businessUnitService.getAllBusinessUnits();
    const businessUnitsProps = businessUnits.map(
      (businessUnit: BusinessUnitEntity) =>
        this.businessUnitService.toIBusinessUnitProps(businessUnit)
    );
    return businessUnitsProps;
  }
}
