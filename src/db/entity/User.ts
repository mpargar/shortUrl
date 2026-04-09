import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Urls } from "./Urls";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  name: string;

  @Column("text")
  email: string;

  @Column("text")
  password: string;

  @Column('boolean', { default: false })
  isVerified: boolean;

  @OneToMany(() => Urls, (url) => url.user)
  urls: Urls[];
}