import createCode from "../../utils/createCode";
import { generatePasswordHash } from "../../utils/password";
import { ServiceWithProps } from "../../utils/types";
import UserDAL from "../DAL/UserDAL";
import { CreateUserDTO, SafeUser, User } from "../types/User";

const createUserService: ServiceWithProps<SafeUser, CreateUserDTO> = async (userPayload) => {
  const encryptedPassword = await generatePasswordHash(userPayload.password);
  const verificationCode = createCode();
  const user = await UserDAL.create({
    email: userPayload.email,
    password: encryptedPassword,
    name: userPayload.name,
    isVerified: false,
    verificationCode,
  });
  let savedUser: User;
  try {
    savedUser = await UserDAL.save(user);
  } catch (error) {
    console.error("Error saving user:", error);
    return {
      message: "Error creating user",
      status: 500,
    };
  }


  const {
    password: _, 
    verificationCode: __,
    ...safeUser
  } = savedUser;
  
  return {
    message: "User created successfully",
    status: 200,
    data: safeUser,
  };
};

export default createUserService;