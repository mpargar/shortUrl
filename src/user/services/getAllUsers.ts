import { Service, ServiceWithProps } from "../../utils/types";
import { User } from "../types/User";

const getAllUsers: Service<User[]> = async () => {
  return {
    message: "All users retrieved successfully",
    status: 200,
    data: [],
  };
};

export default getAllUsers;
