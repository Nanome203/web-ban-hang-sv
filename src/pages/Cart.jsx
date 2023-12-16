import React, { useContext } from 'react'
import { Context } from '../components/ReactContext'
import OrderDisplay from '../components/OrderDisplay'
import styles from '../componentsCSS/TotalMoneyBar.module.css'

function TotalMoneyBar() {
  const { productsInCart } = useContext(Context)
  let totalAmountOfMoney = 0;
  if (productsInCart.length !== 0) {
    productsInCart.forEach(element => {
      totalAmountOfMoney = totalAmountOfMoney + parseInt(element.totalMoney.replace(/\D/g, ''));
    });
  }
  return (
    <div className={styles.moneyBar}>
      <h1>Tổng giá tiền đơn hàng: <span style={{ color: 'red' }}>{totalAmountOfMoney.toLocaleString()} VND</span></h1>
      <div className={styles.buttonContainer}>
        <button>Đặt hàng</button>
      </div>
    </div>
  )

}
function Cart() {
  const { isLoggedIn } = useContext(Context)
  const { productsInCart } = useContext(Context)
  if (!isLoggedIn) {
    return (
      <div style={{ height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p style={{ fontSize: '25px' }}>Vui lòng <span style={{ fontWeight: 'bold' }}>đăng nhập</span> để xem giỏ hàng</p>
      </div>
    )
  }
  else if (isLoggedIn && productsInCart.length === 0) {
    return (
      <div style={{ height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p style={{ fontSize: '25px' }}>Bạn chưa chọn sản phẩm nào</p>
      </div>
    )
  }
  return (
    <>
      <OrderDisplay />
      {
        productsInCart.length === 0 ? <></> : <TotalMoneyBar />

      }
    </>

  )
}

export default Cart