import { ICountryProps } from "../application/controllers/business_unit/dtos/ICountryProps";

export class Country {
  private _id: number;
  private _value: string;

  constructor(props: ICountryProps) {
    this._id = props.id;
    this._value = props.value;
  }

  get id() {
    return this._id;
  }

  set id(val: number) {
    this._id = val;
  }

  get value() {
    return this._value;
  }

  set value(val: string) {
    this._value = val;
  }

  static create(countryProps: ICountryProps): Country {
    return new Country(countryProps);
  }
}
