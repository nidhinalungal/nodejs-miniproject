export interface IBusinessUnitRequest {
    id: number;
    name: string;
    addressLine1: string;
    districtId: number;
    createdBy?: string;
    createdAt?: Date;
    updatedBy?: string;
    updatedAt?: Date;
  }
  