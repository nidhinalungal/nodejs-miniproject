import { DistrictEntity } from "../data_access/repositories/models/district";

export interface IDistrictRepository {
  getById(id: number): Promise<DistrictEntity | null>;
  getAll(): Promise<DistrictEntity[]>;
  save(businessUnit: DistrictEntity): Promise<DistrictEntity>;
}
