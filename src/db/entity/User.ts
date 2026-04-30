import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Url } from "./Url";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", {
    nullable: false,
  })
  name: string;

  @Column("text", {
    nullable: false,
  })
  email: string;

  @Column("text", {
    nullable: false,
  })
  password: string;

  @Column("boolean", {
    default: false,
    nullable: false,
  })
  isVerified: boolean;

  @Column("text", {
    nullable: true,
  })
  verificationCode: string | null;

  @OneToMany(() => Url, (urls) => urls.user)
  urls: Url[];
}