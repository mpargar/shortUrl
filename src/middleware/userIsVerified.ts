import { NextFunction, Request, Response } from "express";

/**
 * This middleware assumes that userDoesExist middleware has already been executed and has inserted the user data into the request body
 * @param req 
 * @param res 
 * @param next 
 */
const userIsVerified = async (req: Request, res: Response, next: NextFunction) => {
  const { user } = req.body;
  if (!user.isVerified) {
    return res.status(403).json({
      message: "User is not verified",
      data: null,
    });
  }
  return next();
};

export default userIsVerified;