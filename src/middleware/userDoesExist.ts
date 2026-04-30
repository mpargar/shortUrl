import { NextFunction, Request, Response } from "express";
import findUser from "../user/services/findUser";

/**
 * This middleware assumes that the request body has already been validated and contains an "email" field
 * @param req 
 * @param res 
 * @param next 
 */
const userDoesExist = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  const {status, data: user} = await findUser({ email });
  if (status !== 200) {
    return res.status(status).json({
      message: "User not found",
      data: null,
    });
  }
  // Insert the user data into the request body for downstream middlewares or route handlers to use
  req.body.user = user;
  return next();
}

export default userDoesExist;