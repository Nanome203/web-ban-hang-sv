import React, { useContext } from 'react'
import { Context } from '../components/ReactContext'

function Orders() {
  const { isLoggedIn } = useContext(Context)
  return (
    <div style={{ height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {!isLoggedIn ?
        <p style={{ fontSize: '25px' }}>Vui lòng <span style={{ fontWeight: 'bold' }}>đăng nhập</span> để xem thông tin đơn hàng</p> :
        <p style={{ fontSize: '25px' }}>Bạn chưa có đơn hàng nào</p>
      }
    </div>
  )
}

export default Orders