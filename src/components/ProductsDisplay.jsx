import React, { useContext } from "react";
import styles from "../componentsCSS/ProductDisplay.module.css";
import OneProductFrame from "./OneProductFrame";
import { Context } from "./ReactContext";
import { useState } from "react";
function ProductsDisplay({ title }) {
  const { products } = useContext(Context)
  const [visible, setVisible] = useState(16);

  function handleDisplay() {
    setVisible(products.length)
  }

  function handleHide() {
    setVisible(16)
  }
  return (
    <div className={styles.ProductsContainer}>
      <h1>{title}</h1>
      <div className={styles.gridContainer}>
        {title === 'Tất cả sản phẩm' ? products.slice(0, visible).map((product) => (
          <OneProductFrame key={product.id} {...product} />
        )) : products.filter(product => product.cagetory === title).slice(0, visible).map((product) => (
          <OneProductFrame key={product.id} {...product} />
        ))}
      </div>
      {visible === products.length ?
        <button className={styles.showMoreBtn} onClick={handleHide} style={{ marginTop: '100px' }}>Ẩn bớt</button> :
        <button className={styles.showMoreBtn} onClick={handleDisplay}>Xem thêm</button>}

    </div>
  );
}

export default ProductsDisplay;
