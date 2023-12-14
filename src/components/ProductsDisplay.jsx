import React, { useContext } from "react";
import styles from "../componentsCSS/ProductDisplay.module.css";
import OneProductFrame from "./OneProductFrame";
import { Context } from "./ReactContext";
function ProductsDisplay({ title }) {
  const products = useContext(Context)

  return (
    <div className={styles.ProductsContainer}>
      <h1>{title}</h1>
      <div className={styles.gridContainer}>
        {title === 'Tất cả sản phẩm' ? products.map((product) => (
          <OneProductFrame key={product.id} {...product} />
        )) : products.filter(product => product.cagetory === title).map((product) => (
          <OneProductFrame key={product.id} {...product} />
        ))}
      </div>

    </div>
  );
}

export default ProductsDisplay;
