import { Document, Schema, Types, model } from "mongoose";

interface iUser {
  userName: string;
  avatar: string;
  email: string;
  password: string;
  vToken: string;
  verified: boolean;
  task: Array<{}>;
  project: Array<{}>;
}

interface iUserData extends iUser, Document {}

const userModel = new Schema<iUserData>(
  {
    userName: { type: String },
    avatar: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    vToken: { type: String },
    verified: { type: Boolean, default: false },
    task: [{ type: Types.ObjectId, ref: "tasks" }],
    project: [{ type: Types.ObjectId, ref: "projects" }],
  },
  { timestamps: true }
);

export default model<iUserData>("users", userModel);
