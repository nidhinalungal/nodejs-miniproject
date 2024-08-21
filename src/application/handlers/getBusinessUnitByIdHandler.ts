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
export class GetBusinessUnitByIdHandler
  implements IRequestHandler<IBusinessUnitProps, number>
{
  constructor(
    @inject(TYPES.IBusinessUnitService)
    private businessUnitService: IBusinessUnitService
  ) {}

  public async handle(id: number): Promise<IBusinessUnitProps> {
    const businessUnit = await this.businessUnitService.findBusinessUnitById(id);
    if (businessUnit == null){
      throw new Error(
        `Business Unit with id ${id} does not exist`
      );
    }
      return this.businessUnitService.toIBusinessUnitProps(businessUnit);
  }
}
