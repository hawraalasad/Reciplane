import React from "react";
import { useParams } from "react-router-dom";

const Region = () => {
  const { name } = useParams();
  return <div>{name}</div>;
};

export default Region;
