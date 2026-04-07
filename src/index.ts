import express from "express";
import Users from "./user/Users";

const app = express();
app.use(express.json());

const PORT = 3000;

app.use("/users", Users);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
