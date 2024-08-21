import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { FeeCategoryEntity } from "./fee-category";
import { SaleEventAssetEntity } from "./sale-event-asset";
import { BaseModel } from "./base-model";

@Entity('asset_fees')
export class AssetFeeEntity extends BaseModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(
    () => SaleEventAssetEntity,
    (saleEventAsset) => saleEventAsset.assetFees
  )
  saleEventAsset!: SaleEventAssetEntity;

  @ManyToOne(() => FeeCategoryEntity, (feeCategory) => feeCategory.assetFees)
  feeCategory!: FeeCategoryEntity;

  @Column({
    name: "amount",
    type: "decimal",
    precision: 10,
    scale: 2,
  })
  amount!: number;
}
