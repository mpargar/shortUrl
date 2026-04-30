import { ServiceWithProps } from "../../utils/types";
import UserDAL from "../DAL/UserDAL";
import { FindUserDTO, User } from "../types/User";


const findUser: ServiceWithProps<User | null, FindUserDTO> = async ({
  email,
}) => {
  try {
    const user = await UserDAL.findOne({ where: { email } });
    if (!user) {
      return {
        message: 'User not found',
        status: 404,
        data: null,
      };
    }
    return {
      message: 'User found successfully',
      status: 200,
      data: user,
    }
  } catch (error) {
    console.error('Error checking if user exists:', error);
    return {
      message: "Error checking if user exists",
      status: 500,
      data: null,
    };
  }
};

export default findUser;