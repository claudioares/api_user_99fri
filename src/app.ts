import express from "express"
import { userCreate } from "./routes/user.create.router";
import { userLogin } from "./routes/user.login.router";
import { userUpdate } from "./routes/user.update.router";

export const app = express();

app.use(express.json());
app.use(userCreate);
app.use(userLogin);
app.use(userUpdate);
