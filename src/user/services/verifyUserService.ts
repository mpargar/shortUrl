import { ServiceWithProps } from "../../utils/types";
import UserDAL from "../DAL/UserDAL";
import { VerifyUserDTO } from "../types/User";

const verifyUserService: ServiceWithProps<boolean, VerifyUserDTO> = async ({
  verificationCode,
  user,
}) => {
  if(user.verificationCode !== verificationCode) {
    return {
      message: "Invalid verification code",
      status: 400,
      data: false,
    };
  }
  try {
    const queryBuilder = UserDAL.createQueryBuilder()
      .update()
      .set({ isVerified: true, verificationCode: null })
      .where("id = :id", { id: user.id })
      .andWhere("verificationCode = :code", { code: verificationCode });
    await queryBuilder.execute();
  } catch (error) {
    console.error("Error verifying user:", error);
    return {
      message: "Error verifying user",
      status: 500,
      data: false,
    };
  }
  return {
    message: "User verified successfully",
    status: 200,
    data: true,
  };
};

export default verifyUserService;