import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BusinessUnitEntity } from "./business-unit";
import { StateEntity } from "./state";

@Entity('districts')
export class DistrictEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "value", type: "varchar", length: 100 })
  value!: string;

  @ManyToOne(() => StateEntity, (state) => state.districts, { eager: true })
  state!: StateEntity;

  @OneToMany(() => BusinessUnitEntity, (businessUnit) => businessUnit.district)
  businessUnits!: BusinessUnitEntity[];
}
