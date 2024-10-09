import instance from ".";

const getIngredients = async () => {
  const { data } = await instance.get("/ingredients");
  return data;
};

export { getIngredients };
