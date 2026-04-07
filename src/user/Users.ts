import express from "express";
import { Request, Response } from "express";
import getAllUsers from "./services/getAllUsers";
import { checkSchema } from "express-validator";
import CreateUserSchema from "./schema/createUserSchema";
import validateRequest from "../utils/validateRequest";
const Users = express.Router();

Users.use(express.json());

Users.get("/", (req: Request, res: Response) => {
  const {status, ...rest} = getAllUsers();
  res.status(status).json(rest);
});

Users.post(
  "/",
  checkSchema(CreateUserSchema),
  validateRequest,
  async (req: Request, res: Response) => {
    res.status(200).json({ message: "User created successfully" });
  }
);





export default Users;
