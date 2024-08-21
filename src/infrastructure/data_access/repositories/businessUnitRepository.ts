import { injectable } from "inversify";
import { Between, Repository } from "typeorm";
import { dataSource } from "../../../config/dataSource";
import { IBusinessUnitRepository } from "../../abstract_repos/IBusinessUnitRepository";
import { BusinessUnitEntity } from "./models/business-unit";

@injectable()
export class BusinessUnitRepository implements IBusinessUnitRepository {
  private businessUnitRepository: Repository<BusinessUnitEntity>;

  constructor() {
    this.businessUnitRepository = dataSource.getRepository(BusinessUnitEntity);
  }
  async getById(id: number): Promise<BusinessUnitEntity | null> {
    return await this.businessUnitRepository.findOneBy({ id });
  }

  async getAll(): Promise<BusinessUnitEntity[]> {
    return await this.businessUnitRepository.find();
  }

  async save(businessUnit: BusinessUnitEntity): Promise<BusinessUnitEntity> {
    return await this.businessUnitRepository.save(businessUnit);
  }
}
