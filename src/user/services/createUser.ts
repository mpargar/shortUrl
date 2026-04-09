import { CreateUserDTO, User} from "../types/User";
import { UserDAL } from "../DAL/UserDAL";
import { ServiceWithProps } from "../../utils/types";

const createUser: ServiceWithProps<User, CreateUserDTO> = async (userData) => {
	const user = UserDAL.create({
    email: userData.email,
    name: userData.name,
    password: userData.password,
  });
	const saved = await UserDAL.save(user);
	return {
    message: "User created successfully",
    status: 201,
    data: saved,
  };
};

export default createUser;