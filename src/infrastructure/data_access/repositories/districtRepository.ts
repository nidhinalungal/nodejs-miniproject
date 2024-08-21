import { injectable } from "inversify";
import { Repository } from "typeorm";
import { dataSource } from "../../../config/dataSource";
import { IDistrictRepository } from "../../abstract_repos/IDistrictRepository";
import { DistrictEntity } from "./models/district";

@injectable()
export class DistrictRepository implements IDistrictRepository {
  private districtRepository: Repository<DistrictEntity>;

  constructor() {
    this.districtRepository = dataSource.getRepository(DistrictEntity);
  }
  async getById(id: number): Promise<DistrictEntity | null> {
    return await this.districtRepository.findOneBy({ id });
  }

  async getAll(): Promise<DistrictEntity[]> {
    return await this.districtRepository.find();
  }

  async save(district: DistrictEntity): Promise<DistrictEntity> {
    return await this.districtRepository.save(district);
  }
}
