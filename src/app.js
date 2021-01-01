import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import globalRouter from "./router/globalRouter";
dotenv.config();
import connect from "../db/mongo";

const app = express();
const PORT = 7011;

app.use(morgan(`dev`));
connect();

app.set("view engine", "pug");

app.use("/", globalRouter);

app.listen(PORT, () => {
    console.log("START");
});