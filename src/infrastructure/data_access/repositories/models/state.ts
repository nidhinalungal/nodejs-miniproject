import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CountryEntity } from "./country";
import { DistrictEntity } from "./district";

@Entity('states')
export class StateEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "value", type: "varchar", length: 100 })
  value!: string;

  @ManyToOne(() => CountryEntity, (country) => country.states, { eager: true })
  country!: CountryEntity;

  @OneToMany(() => DistrictEntity, (district) => district.state)
  districts!: DistrictEntity[];
}
