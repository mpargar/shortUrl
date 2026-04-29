import { NextFunction, Request, Response } from "express";
import findUser from "../user/services/findUser";

/**
 * This middleware assumes that the request body has already been validated and contains an "email" field
 * @param req 
 * @param res 
 * @param next 
 */
const userDoesntExist = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  const {status, ...rest} = await findUser({ email });
  if (status === 200) {
    return res.status(400).json({
      message: "User already exists",
      data: null,
    });
  }
  return next();
}

export default userDoesntExist;