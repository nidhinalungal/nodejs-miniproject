import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AssetEntity } from "./asset";
import { DistrictEntity } from "./district";
import { SaleEventEntity } from "./sale-event";
import { BaseModel } from "./base-model";

@Entity('business_units')
export class BusinessUnitEntity extends BaseModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "name", type: "varchar", length: 255 })
  name!: string;

  @Column({ name: "addressLine1", type: "varchar", length: 255 })
  addressLine1!: string;

  @ManyToOne(() => DistrictEntity, (district) => district.businessUnits, { eager: true })
  district!: DistrictEntity;

  @OneToMany(() => AssetEntity, (asset) => asset.businessUnit)
  assets!: AssetEntity[];

  @OneToMany(() => SaleEventEntity, (saleEvent) => saleEvent.businessUnit)
  saleEvents!: SaleEventEntity[];
}
