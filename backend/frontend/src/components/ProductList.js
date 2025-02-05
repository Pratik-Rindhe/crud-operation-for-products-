import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} ({product.unit}) - Sub Products:
          <ul>
            {product.subProducts.map((sub, index) => (
              <li key={index}>{sub.name}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
