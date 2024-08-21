import { IDistrictProps } from "../application/controllers/business_unit/dtos/IDistrictProps";
import { State } from "./stateDomain";

export class District {
  private _id: number;
  private _value: string;
  private _state!: State;

  constructor(props: IDistrictProps) {
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

  get stateId() {
    return this._state;
  }

  set stateId(val: State) {
    this._state = val;
  }
  static create(districtProps: IDistrictProps): District {
    return new District(districtProps);
  }
}
