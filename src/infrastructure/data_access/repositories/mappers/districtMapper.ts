import { BusinessUnit } from "../../../../domain/bussinessUnitDomain";
import { District } from "../../../../domain/districtDomain";
import { DistrictEntity } from "../models/district";

export class DistrictMapper {
  static toDomain(district: DistrictEntity): District {
    const districtProps = {
      id: district.id,
      value: district.value,
      stateId: district.state.id,
    };
    return new District(districtProps);
  }

  //   static toEntity(busniessUnit: BusinessUnit): BusinessUnitEntity {
  //     const busniessUnitEntity: BusinessUnitEntity = new BusinessUnitEntity();
  //     busniessUnitEntity.id = busniessUnit.id;
  //     busniessUnitEntity.regNo = busniessUnit.regNo;
  //     busniessUnitEntity.brand = busniessUnit.brand;
  //     busniessUnitEntity.year = busniessUnit.year;
  //     busniessUnitEntity.model = busniessUnit.model;
  //     busniessUnitEntity.seatCapacity = busniessUnit.seatCapacity;
  //     return busniessUnitEntity;
  //   }
}
