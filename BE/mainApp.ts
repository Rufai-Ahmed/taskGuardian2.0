import { Application, Request, Response } from "express";
import userR from "./router/userRouter";

export const mainApp = (app: Application) => {
  try {
    app.use("/api/v2", userR);

    app.get("/", (req: Request, res: Response) => {
      try {
        return res.status(200).json({
          msg: "Welcome to my API",
        });
      } catch (error) {
        console.log(error);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
