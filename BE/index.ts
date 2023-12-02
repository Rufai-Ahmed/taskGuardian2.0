import express, { Application } from "express";
import { mainApp } from "./mainApp";
import { dbConfig } from "./utils/dbConfig";

const app: Application = express();
const port: number | string = process.env.PORT || 4000;

mainApp(app);

app.listen(port, () => {
  dbConfig();
});
