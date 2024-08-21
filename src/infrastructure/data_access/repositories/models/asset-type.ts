import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AssetEntity } from "./asset";
import { BaseModel } from "./base-model";

@Entity('asset_types')
export class AssetTypeEntity extends BaseModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "value", type: "varchar", length: 100 })
  value!: string;

  @OneToMany(() => AssetEntity, (asset) => asset.assetType)
  assets!: AssetEntity[];
}
