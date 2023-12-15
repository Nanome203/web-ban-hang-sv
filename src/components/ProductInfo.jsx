import React, { useContext, useState } from 'react'
import styles from '../componentsCSS/ProductInfo.module.css'
import { useParams } from 'react-router-dom'
import { Context } from './ReactContext';
import Comments from './Comments';
function ProductInfo() {
  const { id } = useParams();
  const { products } = useContext(Context);
  const [quantity, setQuantity] = useState(0);
  function handleQuantityChange(e) {
    setQuantity(e.target.value);
  }
  function decreaseQuantity() {
    if (quantity === 0)
      return
    setQuantity(prevQuantity => prevQuantity - 1);
  }
  function increaseQuantity() {
    setQuantity(prevQuantity => prevQuantity + 1);
  }

  if (products.length === 0)
    return (<></>)
  let product = products.find(item => item.id === id);
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
          <div className={styles.property}>
            <h3>Đặc điểm nổi bật</h3>
            <p dangerouslySetInnerHTML={{ __html: detail }}></p>
          </div>

        </div>
        <div className={styles.priceShipping}>
          <div className={styles.price}>
            <h1>{product.name}</h1>
            <br /> <br />
            <p style={{ fontSize: '20px' }}>
              <i className={`fa-solid fa-star ${styles.iconSize}`}></i>
              <i className={`fa-solid fa-star ${styles.iconSize}`}></i>
              <i className={`fa-solid fa-star ${styles.iconSize}`}></i>
              <i className={`fa-solid fa-star ${styles.iconSize}`}></i>
              <i className={`fa-solid fa-star ${styles.iconSize}`}></i>
              (3)
            </p>
            <h2 style={{ color: 'red' }}>{product.price}</h2>
          </div>
          <div className={styles.quarantine}>
            <h3 style={{ color: 'green' }}><i className="fa-solid fa-receipt" style={{ marginRight: '10px' }}></i>Thông tin bảo hành: </h3>
            <p>- Thời gian bảo hành: 2 năm</p>
            <p>- Hình thức bảo hành: Bảo hành chính hãng</p>
            <p>- Nơi bảo hành: Trường ĐH CNTT - ĐHQG TPHCM</p>
          </div>
          <div className={styles.shipping}>
            <h3 style={{ color: 'blue' }}><i className="fa-solid fa-truck" style={{ marginRight: '10px' }}></i>Thông tin vận Chuyển: </h3>
            <p>- Miễn phí vận chuyển cho sinh viên theo học tại trường</p>
            <p>- Giảm 14.000đ phí vận chuyển cho cựu sinh viên của trường</p>
            <p>- Phí vận chuyển tốc hành (giao trong ngày): 30.000đ</p>
          </div>
        </div>
        <div className={styles.transaction}>
          <div>
            <p className={styles.p_sale}>TRƯỜNG ĐẠI HỌC CNTT <br /> ĐHQG TPHCM</p>
            <br />
            <hr style={{ width: '300px', margin: '0 auto' }} />
          </div>
          <div className={styles.box_quantity}>
            <label>Số lượng:</label>
            <button onClick={decreaseQuantity}>-</button>
            <input type="text" value={quantity} onChange={handleQuantityChange} />
            <button onClick={increaseQuantity}>+</button>
          </div>
          <p className={styles.p1_sale} id="total-price">Tạm tính: {quantity === 0 ? 0 : (quantity * parseFloat(product.price)).toFixed(3)}đ
          </p>
          <div>
            <button className={styles.buy_btn}>Mua ngay</button>
            <br />
            <button className={styles.add_to_cart_btn}>Thêm vào giỏ hàng</button>
            <br />
            <button className={styles.buy_first_pay_later_btn}>Mua trước trả sau</button>
          </div>
        </div>
      </div>
      <Comments />
    </div >
  )
}

export default ProductInfo