import instance from "./index";
import { setToken, deleteToken } from "./storage";

const login = async (user) => {
  try {
    const res = await instance.post("/auth/login", user);
    setToken(res.data.token);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const register = async (user) => {
  try {
    const formData = new FormData();
    for (const key in user) {
      formData.append(key, user[key]);
    }
    const res = await instance.post("/auth/signup", formData);
    setToken(res.data.token);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const logout = async () => {
  deleteToken();
};

const getMyProfile = async () => {
  const { data } = await instance.get("/auth/myProfile");
  return data;
};

export { login, register, logout, getMyProfile };
