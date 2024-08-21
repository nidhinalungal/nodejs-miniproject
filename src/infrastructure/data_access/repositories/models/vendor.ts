import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AssetEntity } from "./asset";
import { BaseModel } from "./base-model";

@Entity('vendors')
export class VendorEntity extends BaseModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "number", type: "varchar", length: 100 })
  name!: string;

  @Column({ name: "emailId", type: "varchar", length: 100 })
  emailId!: string;

  @Column({ name: "phoneNumber", type: "varchar", length: 20 })
  phoneNumber!: string;

  @Column({ name: "vendorNumber", type: "varchar", length: 100 })
  vendorNumber!: string;

  @OneToMany(() => AssetEntity, (asset) => asset.vendor)
  assets!: AssetEntity[];
}
