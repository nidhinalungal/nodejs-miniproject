export class BaseModel {
  private _createdBy: string;
  private _createdAt: Date;
  private _updatedBy: string;
  private _updatedAt: Date;

  get createdBy() {
    return this._createdBy
  }
  
  set createdBy(val: string) {
    this._createdBy = val
  }
  
  get createdAt() {
    return this._createdAt
  }
  
  set createdAt(val: Date) {
    this._createdAt = val
  }
  
  get updatedBy() {
    return this._updatedBy
  }
  
  set updatedBy(val: string) {
    this._updatedBy = val
  }
  
  get updatedAt() {
    return this._updatedAt
  }
  
  set updatedAt(val: Date) {
    this._updatedAt = val
  }

  constructor(baseProps: any) {
    this._createdBy = baseProps.createdBy;
    this._createdAt = baseProps.createdAt;
    this._updatedBy = baseProps.updatedBy;
    this._updatedAt = baseProps.updatedAt;
  }

  
}
