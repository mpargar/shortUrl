import express from "express";
import { Request, Response } from "express";
import getAllUsers from "./services/getAllUsers";
import { checkSchema } from "express-validator";
import CreateUserSchema from "./schema/createUserSchema";
import validateRequest from "../utils/validateRequest";
import createUser from "./services/createUser";
const Users = express.Router();

Users.use(express.json());

Users.get("/", async (req: Request, res: Response) => {
  const {status, ...rest} = await getAllUsers();
  res.status(status).json(rest);
});

Users.post(
  "/",
  checkSchema(CreateUserSchema),
  validateRequest,
  async (req: Request, res: Response) => {
    const {status, ...rest} = await createUser(req.body);
    res.status(status).json(rest);
  }
);





export default Users;
