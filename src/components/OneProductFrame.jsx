import React from 'react'
import styles from '../componentsCSS/OneProductFrame.module.css'
function OneProductFrame(props) {
  return (
    <div className={styles.productDisplay}>
      <img
        src={props.image}
        alt='error getting pics'
        style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
      <p className={styles.productName}>{props.name}</p>
      <p className={styles.price}>{props.price} VND</p>
      <p className={styles.rating}>Chưa có đánh giá</p>

    </div>
  )
}

export default OneProductFrame