import React from 'react'
import styles from '../componentsCSS/NavigationHeader.module.css'

function SearchBar() {
    return (
        <div className={styles.SearchBarContainer}>
            <input className={styles.SearchBar} placeholder='Tìm kiếm sản phẩm ...' />
            <div className={styles.IconContainer}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
export default function NavigationHeader() {
    return (
        <div className={styles.Header} >
            <div className={styles.HeaderPart} style={{ flex: 2, justifyContent: 'flex-start' }} >
                <a href='#Home'><img className={styles.Icon}
                    src='https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-DH-Cong-Nghe-Thong-Tin-UIT.png'
                    alt='UIT Icon' /></a>
                <p className={styles.ShopName}>UIT SHOP</p>
                <SearchBar />
            </div>
            <div className={styles.HeaderPart} style={{ flex: 1, }}>
                <ul className={styles.HeaderRemainingItems}>
                    <li><i className="fa-solid fa-clipboard iconSize"></i><span>Đơn hàng</span></li>
                    <li><i className="fa-solid fa-cart-shopping iconSize"></i><span>Giỏ hàng</span></li>
                    <li><i className="fa-solid fa-user iconSize"></i><span>Đăng nhập</span></li>
                </ul>
            </div>
        </div>
    )
}
