import axios from "axios";

const URL: string = "http://localhost:4000/api/v2";

export const createAccount = async (data: any) => {
  try {
    return axios.post(`${URL}/create-user`, data);
  } catch (error) {
    console.log(error);

    return error;
  }
};

export const verifyAccount = async (data: any) => {
  try {
    return axios.patch(`${URL}/verify-user`, data);
  } catch (error) {
    console.log(error);

    return error;
  }
};

export const loginAccount = async (data: any) => {
  try {
    return axios.patch(`${URL}/sign-in-user`, data).then((res) => {
      console.log(res);
      return res.data.data;
    });
  } catch (error) {
    console.log(error);

    return error;
  }
};
