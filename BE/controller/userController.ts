import { Request, Response } from "express";
import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import userModel from "../model/userModel";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { userName, email, password } = req.body;

    const rand = crypto.randomBytes(3).toString("hex");
    const generateSalt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, generateSalt);

    const user = await userModel.create({
      userName,
      email,
      password: hashed,
      vToken: rand,
    });

    return res.status(201).json({
      msg: "User created",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const verifyUser = async (req: Request, res: Response) => {
  try {
    const { email, vToken } = req.body;

    const user = await userModel.findOne({ email });

    if (user && vToken === user.vToken) {
      await userModel.findByIdAndUpdate(
        user._id,
        {
          vToken: "",
          verified: true,
        },
        { new: true }
      );
      return res.status(201).json({
        msg: "User created",
        data: user,
      });
    } else {
      return res.status(404).json({
        msg: "Error verifying user",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const signinUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const findUser = await userModel.findOne({ email });

    if (findUser) {
      const compare = await bcrypt.compare(password, findUser.password);
      if (compare) {
        if (findUser.verified && findUser.vToken === "") {
          const encryptedID = jwt.sign(findUser._id, "justForMe");

          return res.status(200).json({
            msg: "Data gotten",
            data: encryptedID,
          });
        } else {
          return res.status(404).json({
            msg: "Verify your account",
          });
        }
      } else {
        return res.status(404).json({
          msg: "Check your password",
        });
      }
    } else {
      return res.status(404).json({
        msg: "Check your email",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
