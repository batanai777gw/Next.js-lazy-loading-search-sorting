import React from "react";
import Products from "../components/Products";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";

const frontend = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (
        async () => {
            const response = await fetch('http://localhost:8000/api/products/frontend');

            const content = await response.json();

            setProducts(content);
        }
    )()
}, []);
  return (
    <Layout>
      <Products products={products}/>
    </Layout>
  );
};

export default frontend;
