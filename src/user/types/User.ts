import { User as UserEntity } from "../../db/entity/User";

export type User = UserEntity;

export type CreateUserDTO = Pick<User, "name" | "email" | "password">;