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
<<<<<<< HEAD
  try {
    const formData = new FormData();
    for (const key in user) {
      formData.append(key, user[key]);
    }
    const res = await instance.post("/auth/register", formData);
    setToken(res.data.token);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const logout = async () => {
=======
  const res = await instance.post("/api/signup", user);
  return res.data;
};

const logout = async () => {
  await instance.post("/api/logout");
>>>>>>> origin/main
  deleteToken();
};

export { login, register, logout };
