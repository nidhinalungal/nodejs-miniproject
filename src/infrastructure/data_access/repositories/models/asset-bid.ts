import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BuyerEntity } from "./buyer";
import { SaleEventAssetEntity } from "./sale-event-asset";
import { BaseModel } from "./base-model";

@Entity('asset_bids')
export class AssetBidEntity extends BaseModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(
    () => SaleEventAssetEntity,
    (saleEventAsset) => saleEventAsset.assetBids
  )
  saleEventAsset!: SaleEventAssetEntity;

  @ManyToOne(() => BuyerEntity, (buyer) => buyer.assetBids)
  buyer!: BuyerEntity;

  @Column({
    name: "bidAmount",
    type: "decimal",
    precision: 10,
    scale: 2,
  })
  bidAmount!: number;
}
