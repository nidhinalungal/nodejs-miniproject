import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AssetBidEntity } from "./asset-bid";
import { BaseModel } from "./base-model";

@Entity('buyers')
export class BuyerEntity extends BaseModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "name", type: "varchar", length: 255 })
  name!: string;

  @Column({ name: "phoneNumber", type: "varchar", length: 15 })
  phoneNumber!: string;

  @Column({ name: "emailId", type: "varchar", length: 100 })
  emailId!: string;

  @Column({ name: "clientNumber", type: "varchar", length: 100 })
  clientNumber!: string;

  @Column({ name: "status", type: "varchar", length: 10 })
  status!: string; // use enum

  @OneToMany(() => AssetBidEntity, (assetBid) => assetBid.buyer)
  assetBids!: AssetBidEntity[];
}
