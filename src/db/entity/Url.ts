import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Url {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", {
    nullable: false,
  })
  originalUrl: string;

  @Column("text", {
    nullable: false,
  })
  shortUrl: string;

  @Column("int")
  userId: number;

  @ManyToOne(() => User, (user) => user.urls)
  @JoinTable({
    name: "userId",
  })
  user: User;
}