import { ServiceWithProps } from "../../utils/types";
import { User } from "../types/User";

const getAllUsers: ServiceWithProps<User[]> = () => {
  return {
    message: "All users retrieved successfully",
    status: 200,
    data: [],
  };
};

export default getAllUsers;
