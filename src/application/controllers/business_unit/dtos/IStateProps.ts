import { ICountryProps } from "./ICountryProps";

export interface IStateProps {
    id: number;
    value: string;
    country: ICountryProps;
  }