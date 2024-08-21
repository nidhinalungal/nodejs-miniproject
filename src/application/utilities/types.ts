const TYPES = {
  DataSource: Symbol.for("DataSource"),
  IBusinessUnitService: Symbol.for("IBusinessUnitService"),
  IBusinessUnitRepository: Symbol.for("IBusinessUnitRepository"),
  IDistrictRepository: Symbol.for("IDistrictRepository"),
  CreateBusinessUnitHandler: Symbol.for("CreateBusinessUnitHandler"),
  IMediator: Symbol.for("IMediator"),
  GetAllBusinessUnitsHandler: Symbol.for("GetAllBusinessUnitsHandler"),
  GetBusinessUnitByIdHandler: Symbol.for("GetBusinessUnitByIdHandler"),

};

export { TYPES };
