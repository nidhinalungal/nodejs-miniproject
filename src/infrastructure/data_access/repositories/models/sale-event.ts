import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BusinessUnitEntity } from "./business-unit";
import { SaleEventAssetEntity } from "./sale-event-asset";
import { BaseModel } from "./base-model";

@Entity('sale_events')
export class SaleEventEntity extends BaseModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "name", type: "varchar", length: 100 })
  name!: string;

  @Column({ name: "number", type: "varchar", length: 100 })
  number!: string;

  @ManyToOne(
    () => BusinessUnitEntity,
    (businessUnit) => businessUnit.saleEvents
  )
  businessUnit!: BusinessUnitEntity;

  @Column({ name: "startDateTime", type: "timestamp" })
  startDateTime!: Date;

  @Column({ name: "endDateTime", type: "timestamp" })
  endDateTime!: Date;

  @Column({ name: "isPublic", type: "boolean" })
  isPublic!: boolean;

  @OneToMany(
    () => SaleEventAssetEntity,
    (saleEventAsset) => saleEventAsset.saleEvent
  )
  saleEventAssets!: SaleEventAssetEntity[];
}
