import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Urls {
	@PrimaryGeneratedColumn()
	id: number;

	@Column("text")
	shortUrl: string;

	@Column("text")
	originalUrl: string;

	@Column()
	userId: number;

	@ManyToOne(() => User, (user) => user.urls, { onDelete: "CASCADE" })
	@JoinColumn({ name: "userId" })
	user: User;
}

