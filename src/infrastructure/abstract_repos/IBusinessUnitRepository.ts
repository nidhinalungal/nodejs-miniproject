import { BusinessUnitEntity } from "../data_access/repositories/models/business-unit";

export interface IBusinessUnitRepository {
  getById(id: number): Promise<BusinessUnitEntity | null>;
  getAll(): Promise<BusinessUnitEntity[]>;
  save(businessUnit: BusinessUnitEntity): Promise<BusinessUnitEntity>;
}
