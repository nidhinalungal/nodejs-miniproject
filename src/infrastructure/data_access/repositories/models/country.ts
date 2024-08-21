import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StateEntity } from "./state";

@Entity("countries")
export class CountryEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "value", type: "varchar", length: 100 })
  value!: string;

  @OneToMany(() => StateEntity, (state) => state.country)
  states!: StateEntity[];
}
