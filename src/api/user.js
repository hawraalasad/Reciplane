import instance from ".";

const getUser = async () => {
  const { data } = await instance.get("/users"); //in backend UserRouter.get("/users/:userId", getUserById);

  return data;
};

export { getUser };
