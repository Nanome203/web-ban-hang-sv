import React, { useContext } from 'react'
import { Context } from '../components/ReactContext'

function Cart() {
  const { isLoggedIn } = useContext(Context)
  return (
    <div style={{ height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {!isLoggedIn ?
        <p style={{ fontSize: '25px' }}>Vui lòng <span style={{ fontWeight: 'bold' }}>đăng nhập</span> để xem giỏ hàng</p> :
        <p style={{ fontSize: '25px' }}>Bạn chưa chọn sản phẩm nào</p>
      }
    </div>
  )
}

export default Cart