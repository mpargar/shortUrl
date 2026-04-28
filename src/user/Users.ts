import express from "express";
import { Request, Response } from "express";
import { checkSchema } from "express-validator";
import CreateUserSchema from "./schema/createUserSchema";
import validateRequest from "../utils/validateRequest";
import createUserService from "./services/createUserService";
const Users = express.Router();

Users.use(express.json());

Users.post(
  "/",
  checkSchema(CreateUserSchema),
  validateRequest,
  async (req: Request, res: Response) => {
    const { status, ...rest } = await createUserService(req.body);
    res.status(status).json(rest);
  }
);





export default Users;
