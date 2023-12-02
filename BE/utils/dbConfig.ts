import { connect } from "mongoose";

const URL: string = "mongodb://localhost:27017/taskDB";

export const dbConfig = async () => {
  try {
    await connect(URL).then((res) => {
      console.log("DB connected");
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};
