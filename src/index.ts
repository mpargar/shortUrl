import "reflect-metadata";
import express from "express";
import Users from "./user/Users";
import { AppDataSource } from "./data-source";
import { generateSessionJwt, validateSessionJwt } from "./utils/jwt";

const app = express();
app.use(express.json());

const PORT = 3000;

app.use("/users", Users);

AppDataSource.initialize().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch((error) => console.log(error));

