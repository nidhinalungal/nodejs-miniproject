import { IAssetProps } from "./IAssetProps";
import { IDistrictProps } from "./IDistrictProps";
import { ISaleEventProps } from "./ISaleEventProps";

export interface IBusinessUnitProps {
  id: number;
  name: string;
  addressLine1: string;
  district: IDistrictProps;
  // assets: IAssetProps[];
  // saleEvents: ISaleEventProps[];
  createdBy?: string;
  createdAt?: Date;
  updatedBy?: string;
  updatedAt?: Date;
}
