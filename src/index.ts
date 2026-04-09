import "reflect-metadata";
import express from "express";
import Users from "./user/Users";
import { AppDataSource } from "./data-source";
import 'dotenv/config';

const app = express();
app.use(express.json());

const PORT = 3000;

app.use("/users", Users);

AppDataSource.initialize().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.log(process.env)
    console.error("Error during Data Source initialization:", err);
});