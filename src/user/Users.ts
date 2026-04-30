import express from "express";
import { Request, Response } from "express";
import { checkSchema } from "express-validator";
import CreateUserSchema from "./schema/createUserSchema";
import validateRequest from "../utils/validateRequest";
import createUserService from "./services/createUserService";
import userDoesntExist from "../middleware/userDoesntExist";
import verifyUserService from "./services/verifyUserService";
import VerifyUserSchema from "./schema/verifyUserSchema";
import userDoesExist from "../middleware/userDoesExist";
import userIsNotVerified from "../middleware/userIsNotVerified";
const Users = express.Router();

Users.use(express.json());

Users.post(
  "/",
  checkSchema(CreateUserSchema),
  validateRequest,
  userDoesntExist,
  async (req: Request, res: Response) => {
    const { status, ...rest } = await createUserService(req.body);
    res.status(status).json(rest);
  }
);

Users.post("/verify",
  checkSchema(VerifyUserSchema),
  validateRequest,
  userDoesExist,
  userIsNotVerified,
  async (req: Request, res: Response) => {
    const { status, ...rest } = await verifyUserService(req.body);
    res.status(status).json(rest);
});





export default Users;
