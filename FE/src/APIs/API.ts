import axios from "axios";

const URL: string = "http://localhost:4000/api/v2";

export const createProject = (data: any, ID: string) => {
  try {
    return axios.post(`${URL}/create-project/${ID}`, data).then((res) => {
      return res;
    });
  } catch (error) {
    console.log(error);
  }
};

export const createTask = (data: any, userID: string, projectID: string) => {
  try {
    return axios.post(`${URL}/create-task/${userID}/${projectID}`, data);
  } catch (error) {
    console.log(error);
  }
};

export const getProjects = (ID: any) => {
  try {
    return axios.get(`${URL}/view-projects/${ID}`).then((res) => {
      return res;
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTasks = (userID: string) => {
  try {
    return axios.get(`${URL}/get-tasks/${userID}`).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const getOneUser = (userID: string) => {
  try {
    return axios.get(`${URL}/get-one-user/${userID}`).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const toBremo = (data: any) => {
  try {
    return axios.post(`${URL}/upgrade-bremo`, data);
  } catch (error) {
    console.log(error);
  }
};

export const toPremo = (data: any) => {
  try {
    return axios.post(`${URL}/upgrade-premo`, data);
  } catch (error) {
    console.log(error);
  }
};
