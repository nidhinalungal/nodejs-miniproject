import { IBusinessUnitProps } from "../application/controllers/business_unit/dtos/IBusinessUnitProps";
import { IBusinessUnitRequest } from "../application/controllers/business_unit/dtos/IBusinessUnitRequest";
import { Asset } from "./assetDomain";
import { BaseModel } from "./baseModel";
import { District } from "./districtDomain";
import { SaleEvent } from "./saleEventDomain";

export class BusinessUnit extends BaseModel {
  private _id!: number;
  private _name: string;
  private _addressLine1: string;
  private _district!: District;
  private _assets!: Asset[];
  private _saleEvents!: SaleEvent[];

  constructor(props: IBusinessUnitRequest) {
    super(props);
    this._name = props.name;
    this._addressLine1 = props.addressLine1;
    }

  get id() {
    return this._id;
  }

  set id(val: number) {
    this._id = val;
  }

  get name() {
    return this._name;
  }

  set name(val: string) {
    this._name = val;
  }

  get addressLine1() {
    return this._addressLine1;
  }

  set addressLine1(val: string) {
    this._addressLine1 = val;
  }

  get district() {
    return this._district;
  }

  set district(val: District) {
    this._district = val;
  }

  get assets() {
    return this._assets;
  }

  set assets(val: Asset[]) {
    this._assets = val;
  }

  get saleEvents() {
    return this._saleEvents;
  }

  set saleEvents(val: SaleEvent[]) {
    this._saleEvents = val;
  }

  public static create(businessUnitRequest: IBusinessUnitRequest): BusinessUnit {
    // add validations if needed
    return new BusinessUnit(businessUnitRequest);
  }
}
