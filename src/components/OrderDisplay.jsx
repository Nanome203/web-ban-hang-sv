import React, { useContext } from 'react'
import styles from '../componentsCSS/OrderDisplay.module.css'
import { Context } from './ReactContext'
import { useNavigate } from 'react-router-dom'

function ItemTag({ id, image, name, quantity, totalMoney }) {
  const { productsInCart, setProductsInCart, setIsLoggedIn } = useContext(Context)
  const navigation = useNavigate()
  function deleteItem() {
    let newProductsInCart = productsInCart.filter((product) => product.id !== id)
    if (newProductsInCart.length === 0) {
      setIsLoggedIn(true)
      navigation('/cart')
    }
    setProductsInCart(newProductsInCart)
  }

  return (
    <div className={styles.itemTag}>
      <div className={styles.productImage}>
        <img src={image} alt="" />
      </div>
      <div className={styles.productInfoDetails}>
        <div className={styles.Info}>
          <h1>{name}</h1>
          <p>So luong: {quantity}</p>
          <p>Tong gia: {totalMoney} VND</p>
        </div>
        <div className={styles.updateButtons}>
          <button>-</button>
          <div className={styles.quantityDisplay}>{quantity}</div>
          <button>+</button>
          <div className={styles.deleteButton} onClick={deleteItem}>X</div>

        </div>
      </div>
    </div>
  )
}
function OrderDisplay() {
  const { productsInCart, setProductsInCart } = useContext(Context)
  return (
    <div className={styles.orderContainer}>
      {
        productsInCart.map(
          (product) => <ItemTag key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            quantity={product.quantity}
            totalMoney={product.totalMoney}
          />)
      }
    </div>
  )
}

export default OrderDisplay