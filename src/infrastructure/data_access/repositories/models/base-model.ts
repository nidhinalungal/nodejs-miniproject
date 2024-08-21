import { Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

export class BaseModel {
  @Column({ name: "createdBy", default: "system" })
  createdBy?: string;

  @CreateDateColumn()
  createdAt?: Date;

  @Column({ name: "updatedBy", default: "system" })
  updatedBy?: string;

  @UpdateDateColumn()
  updatedAt?: Date;
}
