import React, { useContext, useState } from 'react'
import styles from '../componentsCSS/ProductInfo.module.css'
import { useParams } from 'react-router-dom'
import { Context } from './ReactContext';
import Comments from './Comments';
function ProductInfo() {
  const { id } = useParams();
  const { products, productsInCart, setProductsInCart, isLoggedIn, setNumberOfProductsInCart } = useContext(Context);
  const [isInCart, setIsInCart] = useState(false)
  const [quantity, setQuantity] = useState(0);

  function addToCart() {
    if (!isLoggedIn) {
      window.alert('Vui lòng đăng nhập để thêm vào giỏ hàng')
      return
    }
    else if (isLoggedIn && quantity === 0) {
      window.alert('Vui lòng chọn số lượng')
      return
    }
    else if (isInCart) {
      window.alert('Sản phẩm đã ở trong giỏ hàng')
      return
    }
    let newProductsInCart = [...productsInCart, {
      id: id,
      image: product.image,
      name: product.name,
      quantity: quantity,
      totalMoney: (quantity * parseInt(product.price)).toLocaleString(),
      orignalPrice: product.price
    }
    ]
    setProductsInCart(newProductsInCart);
    setIsInCart(prev => !prev)
    setNumberOfProductsInCart(prev => prev + 1)
    window.alert('Thêm vào giỏ hàng thành công');
  }
  function handleBuy() {
    if (!isLoggedIn)
      window.alert('Vui lòng đăng nhập trước khi mua')
  }
  function handleQuantityChange(e) {
    let value = parseInt(e.target.value)
    if (e.target.value === '') {
      setQuantity(e.target.value)
      return
    }
    if (isNaN(value)) {
      window.alert('Vui lòng nhập số dương')
      setQuantity(prev => prev)
      return
    }
    setQuantity(value);
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
            <h3>Mô tả sản phẩm</h3>
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
            <h2 style={{ color: 'red' }}>{parseInt(product.price).toLocaleString()} VND</h2>
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
            <img className={styles.Icon}
              src='https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-DH-Cong-Nghe-Thong-Tin-UIT.png'
              alt='UIT Icon' />
            <p className={styles.p_sale}>TRƯỜNG ĐẠI HỌC CNTT <br /> ĐHQG TPHCM</p>
            <br />
            <hr style={{ width: '70%', margin: '0 auto' }} />
          </div>
          <div className={styles.box_quantity}>
            <label>Số lượng:</label>
            <button onClick={decreaseQuantity}>-</button>
            <input type="text" value={quantity} onChange={handleQuantityChange} />
            <button onClick={increaseQuantity}>+</button>
          </div>
          <p className={styles.p1_sale} id="total-price">Tạm tính: {quantity === 0 ? 0 : (quantity * parseInt(product.price)).toLocaleString()} VND
          </p>
          <div>
            <button className={styles.buy_btn} onClick={handleBuy}>Mua ngay</button>
            <br />
            <button className={styles.add_to_cart_btn} onClick={addToCart}>Thêm vào giỏ hàng</button>
            <br />
            <button className={styles.buy_first_pay_later_btn} onClick={handleBuy}>Mua trước trả sau</button>
          </div>
        </div>
      </div>
      <Comments />
    </div >
  )
}

export default ProductInfo