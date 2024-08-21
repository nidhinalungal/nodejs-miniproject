import { IStateProps } from "../application/controllers/business_unit/dtos/IStateProps";
import { Country } from "./countryDomain";

export class State {
  private _id: number;
  private _value: string;
  private _country!: Country;

  constructor(props: IStateProps) {
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

  get countryId() {
    return this._country;
  }

  set countryId(val: Country) {
    this._country = val;
  }
  static create(stateProps: IStateProps): State {
    return new State(stateProps);
  }
}
