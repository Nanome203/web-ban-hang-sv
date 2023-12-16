import React from 'react'
import styles from '../componentsCSS/OneProductFrame.module.css'
import { Link } from 'react-router-dom'
function OneProductFrame(props) {
  let category = '';
  switch (props.cagetory) {
    case 'Khác':
      category = 'others';
      break;
    case 'Lót chuột':
      category = 'mousepad';
      break;
    case 'Chuột':
      category = 'mouse';
      break;
    case 'Bàn phím':
      category = 'keyboard';
      break;
    case 'Đồ UIT':
      category = 'UITproducts';
      break;
    default:
      category = 'laptop'
      break;
  }
  return (
    <Link to={`/${category}/${props.id}`} className={styles.linker}>
      <div className={styles.productDisplay}>
        <img
          src={props.image}
          alt='error getting pics'
          style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
        <p className={styles.productName}>{props.name}</p>
        <p className={styles.price}>{parseInt(props.price).toLocaleString()} VND</p>
        <p className={styles.rating}>
          <i className={`fa-solid fa-star ${styles.iconSize}`}></i>
          <i className={`fa-solid fa-star ${styles.iconSize}`}></i>
          <i className={`fa-solid fa-star ${styles.iconSize}`}></i>
          <i className={`fa-solid fa-star ${styles.iconSize}`}></i>
          <i className={`fa-solid fa-star ${styles.iconSize}`}></i>
          (3)
        </p>
      </div>
    </Link>
  )
}

export default OneProductFrame