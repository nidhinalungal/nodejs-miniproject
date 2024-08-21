import { inject, injectable } from "inversify";
import { BusinessUnit } from "../../domain/bussinessUnitDomain";
import { IBusinessUnitRepository } from "../../infrastructure/abstract_repos/IBusinessUnitRepository";
import { IDistrictRepository } from "../../infrastructure/abstract_repos/IDistrictRepository";
import { BusinessUnitMapper } from "../../infrastructure/data_access/repositories/mappers/businessUnitMapper";
import { BusinessUnitEntity } from "../../infrastructure/data_access/repositories/models/business-unit";
import { IBusinessUnitProps } from "../controllers/business_unit/dtos/IBusinessUnitProps";
import { TYPES } from "../utilities/types";
import { IBusinessUnitService } from "./interfaces/IBusinessUnitService";
import { DistrictEntity } from "../../infrastructure/data_access/repositories/models/district";
import { IBusinessUnitRequest } from "../controllers/business_unit/dtos/IBusinessUnitRequest";

@injectable()
export class BusinessUnitService implements IBusinessUnitService {
  constructor(
    @inject(TYPES.IBusinessUnitRepository)
    private businessUnitRepository: IBusinessUnitRepository,
    @inject(TYPES.IDistrictRepository)
    private districtRepository: IDistrictRepository
  ) {}

  async createBusinessUnit(
    businessUnitRequest: IBusinessUnitRequest
  ): Promise<BusinessUnitEntity> {
    const businessUnit: BusinessUnit = BusinessUnit.create(businessUnitRequest);
    const district = await this.districtRepository.getById(
      businessUnitRequest.districtId
    );
    const businessUnitEntity = BusinessUnitMapper.toEntity(
      businessUnit,
      district!
    );
    const savedBusinessUnit = await this.businessUnitRepository.save(
      businessUnitEntity
    );
    return savedBusinessUnit;
  }

  getAllBusinessUnits(): Promise<BusinessUnitEntity[]> {
    return this.businessUnitRepository.getAll();
  }

  findBusinessUnitById(id: number): Promise<BusinessUnitEntity | null> {
    return this.businessUnitRepository.getById(id);
  }

  toIBusinessUnitProps(businessUnit: BusinessUnitEntity): IBusinessUnitProps {
    return {
      id: businessUnit.id,
      name: businessUnit.name,
      addressLine1: businessUnit.addressLine1,
      district: {
        id: businessUnit.district.id,
        value: businessUnit.district.value,
        state: {
          id: businessUnit.district.state.id,
          value: businessUnit.district.state.value,
          country: {
            id: businessUnit.district.state.country.id,
            value: businessUnit.district.state.country.value,
          },
        },
      },
      createdBy: businessUnit.createdBy,
      createdAt: businessUnit.createdAt,
      updatedBy: businessUnit.updatedBy,
      updatedAt: businessUnit.updatedAt,
    };
  }
}
