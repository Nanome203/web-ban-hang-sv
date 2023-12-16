import React, { useContext } from 'react'
import styles from '../componentsCSS/OrderDisplay.module.css'
import { Context } from './ReactContext'

function ItemTag({ id, image, name, quantity, totalMoney, orignalPrice }) {
  const { productsInCart, setProductsInCart } = useContext(Context)
  function deleteItem() {
    let newProductsInCart = productsInCart.filter((product) => product.id !== id)
    setProductsInCart(newProductsInCart)
  }

  function decreaseQuantity() {
    if (quantity === 1) {
      deleteItem()
      return
    }
    let newQuantity = quantity - 1;
    let newProductsInCart = productsInCart.map(product => {
      if (product.id === id) {
        return { ...product, quantity: newQuantity, totalMoney: (newQuantity * parseInt(product.orignalPrice)).toLocaleString() }
      }
      return product;
    })
    setProductsInCart(newProductsInCart)

  }

  function increaseQuantity() {
    let newQuantity = quantity + 1;
    let newProductsInCart = productsInCart.map(product => {
      if (product.id === id) {
        return { ...product, quantity: newQuantity, totalMoney: (newQuantity * parseInt(product.orignalPrice)).toLocaleString() }
      }
      return product;
    })
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
          <p>Giá sản phẩm: {parseInt(orignalPrice).toLocaleString()} VND</p>
          <p>Số lượng: {quantity}</p>
          <p>Tổng giá tiền: {totalMoney} VND</p>
        </div>
        <div className={styles.updateButtons}>
          <button onClick={decreaseQuantity}>-</button>
          <div className={styles.quantityDisplay}>{quantity}</div>
          <button onClick={increaseQuantity}>+</button>
          <div className={styles.deleteButton} onClick={deleteItem}><i className="fa-solid fa-x"></i></div>

        </div>
      </div>
    </div>
  )
}
function OrderDisplay() {
  const { productsInCart } = useContext(Context)
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
            orignalPrice={product.orignalPrice}
          />)
      }
    </div>
  )
}

export default OrderDisplay