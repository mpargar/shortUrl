import { AppDataSource } from "../../data-source";
import { User } from "../../db/entity/User";

export const UserDAL = AppDataSource.getRepository(User);