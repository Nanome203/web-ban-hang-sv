import React, { useContext } from 'react'
import styles from '../componentsCSS/ProductInfo.module.css'
import { useParams } from 'react-router-dom'
import { Context } from './ReactContext';
function ProductInfo() {
  const { id } = useParams();
  const products = useContext(Context);
  console.log(products)
  if (products.length === 0)
    return (<></>)
  let product = products.find(item => item.id === id);
  console.log(product)
  let detail = '';
  try {
    for (let i = 0; i < product.details.length; ++i) {
      detail = detail + product.details[i] + '<br/>'
    }
  } catch (error) {
    console.log(error)
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imageInfo}>
          <img src={product.image} alt="" />
          <h3>Đặc điểm nổi bật</h3>
          <p dangerouslySetInnerHTML={{ __html: detail }}></p>
        </div>
        <div className={styles.priceShipping}>
          <div className={styles.price}></div>
          <div className={styles.quarantine}></div>
          <div className={styles.shipping}></div>
        </div>
        <div className={styles.transaction}></div>
      </div>
    </div >
  )
}

export default ProductInfo