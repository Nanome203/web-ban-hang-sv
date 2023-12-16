import React, { useContext } from 'react'
import { Context } from '../components/ReactContext'
import OrderDisplay from '../components/OrderDisplay'

function Cart() {
  const { isLoggedIn } = useContext(Context)
  const { productsInCart, setProductsInCart } = useContext(Context)
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
    <OrderDisplay />
  )
}

export default Cart