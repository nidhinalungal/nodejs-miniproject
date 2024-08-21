import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AssetEntity } from "./asset";
import { AssetBidEntity } from "./asset-bid";
import { AssetFeeEntity } from "./asset-fee";
import { SaleEventEntity } from "./sale-event";
import { BaseModel } from "./base-model";

@Entity('sale_event_assets')
export class SaleEventAssetEntity extends BaseModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => AssetEntity, (asset) => asset.saleEventAssets)
  asset!: AssetEntity;

  @ManyToOne(() => SaleEventEntity, (saleEvent) => saleEvent.saleEventAssets)
  saleEvent!: SaleEventEntity;

  @Column({ name: "lotNumber", type: "varchar", length: 20 })
  lotNumber!: string;

  @OneToMany(() => AssetBidEntity, (assetBid) => assetBid.saleEventAsset)
  assetBids!: AssetBidEntity[];

  @OneToMany(() => AssetFeeEntity, (assetFee) => assetFee.saleEventAsset)
  assetFees!: AssetFeeEntity[];
}
