import instance from "./index";
import { setToken, deleteToken } from "./storage";

const login = async (user) => {
  try {
    const res = await instance.post("/api/login", user);
    setToken(res.data.token);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const register = async (user) => {
  const res = await instance.post("/api/signup", user);
  return res.data;
};

const logout = async () => {
  await instance.post("/api/logout");
  deleteToken();
};

export { login, register, logout };
