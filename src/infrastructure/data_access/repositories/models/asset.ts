import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AssetTypeEntity } from "./asset-type";
import { BusinessUnitEntity } from "./business-unit";
import { SaleEventAssetEntity } from "./sale-event-asset";
import { VendorEntity } from "./vendor";
import { BaseModel } from "./base-model";

@Entity('assets')
export class AssetEntity extends BaseModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "name", type: "varchar", length: 100 })
  name!: string;

  @Column({ name: "assetNumber", type: "varchar", length: 100 })
  assetNumber!: string;

  @Column({
    name: "reserveAmt",
    type: "decimal",
    precision: 10,
    scale: 2,
  })
  reserveAmt!: number;

  @ManyToOne(() => BusinessUnitEntity, (businessUnit) => businessUnit.assets)
  businessUnit: BusinessUnitEntity | undefined;

  @ManyToOne(() => VendorEntity, (vendor) => vendor.assets)
  vendor!: VendorEntity;

  @ManyToOne(() => AssetTypeEntity, (assetType) => assetType.assets)
  assetType!: AssetTypeEntity;

  @OneToMany(
    () => SaleEventAssetEntity,
    (saleEventAsset) => saleEventAsset.asset
  )
  saleEventAssets!: SaleEventAssetEntity[];
}
