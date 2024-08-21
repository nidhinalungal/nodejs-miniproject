import { BusinessUnit } from "../../../domain/bussinessUnitDomain";
import { BusinessUnitEntity } from "../../../infrastructure/data_access/repositories/models/business-unit";
import { IBusinessUnitProps } from "../../controllers/business_unit/dtos/IBusinessUnitProps";
import { IBusinessUnitRequest } from "../../controllers/business_unit/dtos/IBusinessUnitRequest";

export interface IBusinessUnitService {
  createBusinessUnit(
    businessUnitRequest: IBusinessUnitRequest
  ): Promise<BusinessUnitEntity>;
  getAllBusinessUnits(): Promise<BusinessUnitEntity[]>;
  findBusinessUnitById(id: number): Promise<BusinessUnitEntity | null>;
  toIBusinessUnitProps(
    BusinessUnit: BusinessUnitEntity
  ): IBusinessUnitProps;
}
