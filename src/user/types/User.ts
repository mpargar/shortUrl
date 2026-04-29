import { User as UserEntity } from "../../db/entity/User";

export type User = UserEntity;

export type SafeUser = Omit<User, "password">;

export type CreateUserDTO = Pick<User, "name" | "email" | "password">;

export type FindUserDTO = Pick<User, "email">;