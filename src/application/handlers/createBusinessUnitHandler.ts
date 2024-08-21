import { inject, injectable } from "inversify";
import { TYPES } from "../utilities/types";
import { IRequestHandler } from "./interfaces/IRequestHandler";
import { IBusinessUnitRequest } from "../controllers/business_unit/dtos/IBusinessUnitRequest";
import { IBusinessUnitProps } from "../controllers/business_unit/dtos/IBusinessUnitProps";
import { IBusinessUnitService } from "../services/interfaces/IBusinessUnitService";
import { IDistrictRepository } from "../../infrastructure/abstract_repos/IDistrictRepository";
import { DistrictEntity } from "../../infrastructure/data_access/repositories/models/district";
import { logger } from "../../config/logConfig";

@injectable()
export class CreateBusinessUnitHandler
  implements IRequestHandler<IBusinessUnitProps, IBusinessUnitRequest>
{
  constructor(
    @inject(TYPES.IBusinessUnitService)
    private businessUnitService: IBusinessUnitService,
    @inject(TYPES.IDistrictRepository)
    private districtRepository: IDistrictRepository
  ) {}
  public async handle(
    businessUnitRequest: IBusinessUnitRequest
  ): Promise<IBusinessUnitProps> {
    console.log("Received body data:", businessUnitRequest);
    logger.info("Using Winston Logging")
    logger.info("Received body data:", businessUnitRequest);
    const district: DistrictEntity | null =
      await this.districtRepository.getById(businessUnitRequest.districtId);
    if (district == null) {
      throw new Error(
        `Distrct not existing with id ${businessUnitRequest.districtId}`
      );
    }
    const businessUnit = await this.businessUnitService.createBusinessUnit(
      businessUnitRequest
    );
    return this.businessUnitService.toIBusinessUnitProps(businessUnit);
  }
}
