import { BusinessUnit } from "../../../../domain/bussinessUnitDomain";
import { BusinessUnitEntity } from ".././models/business-unit";
import { DistrictEntity } from ".././models/district";
import { DistrictMapper } from "./districtMapper";

export class BusinessUnitMapper {
  static toDomain(busniessUnit: BusinessUnitEntity): BusinessUnit | null {
    // const districtProps = {
    //   id: busniessUnit.district.id,
    //   value: busniessUnit.district.value,
    //   stateId: 1,
    // };
    // const busniessUnitProps = {
    //   id: busniessUnit.id,
    //   name: busniessUnit.name,
    //   addressLine1: busniessUnit.addressLine1,
    //   district: districtProps,
    //   assets: busniessUnit.assets,
    //   saleEvents: busniessUnit.saleEvents,
    //   createdBy: busniessUnit.createdBy,
    //   createdAt: busniessUnit.createdAt,
    //   updatedBy: busniessUnit.updatedBy,
    //   updatedAt: busniessUnit.updatedAt,
    // };
    // return new BusinessUnit(busniessUnitProps);
    return null;
  }

  static toEntity(
    busniessUnit: BusinessUnit,
    district: DistrictEntity
  ): BusinessUnitEntity {
    const busniessUnitEntity: BusinessUnitEntity = new BusinessUnitEntity();
    busniessUnitEntity.name = busniessUnit.name;
    busniessUnitEntity.addressLine1 = busniessUnit.addressLine1;
    busniessUnitEntity.district = district;
    busniessUnitEntity.createdBy = busniessUnit.createdBy;
    return busniessUnitEntity;
  }
}
