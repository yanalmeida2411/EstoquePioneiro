import React from "react";
import Table from "../src/components/Table/Table";
import ShoppingCart from "../src/components/ShoppingCart/ShoppingCart";
import "./home-style.css";
const Home = () => {
  return (
    <>
      <Table />
      <ShoppingCart />
    </>
  );
};

export default Home;
