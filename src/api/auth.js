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
  const res = await instance.post("/auth/register", user);
  return res.data;
};

const logout = async () => {
  await instance.post("/auth/logout");
  deleteToken();
};

export { login, register, logout };
