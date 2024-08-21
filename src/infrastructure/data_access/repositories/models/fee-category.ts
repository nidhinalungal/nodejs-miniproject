import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AssetFeeEntity } from "./asset-fee";
import { BaseModel } from "./base-model";

@Entity('fee_categories')
export class FeeCategoryEntity extends BaseModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "value", type: "varchar", length: 100 })
  value!: string;

  @OneToMany(() => AssetFeeEntity, (assetFee) => assetFee.feeCategory)
  assetFees!: AssetFeeEntity[];
}
