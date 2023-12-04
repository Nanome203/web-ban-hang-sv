import React from 'react'
import styles from './NavigationHeader.module.css'
import "./App"

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
            <img className={styles.Icon}
                src='https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-DH-Cong-Nghe-Thong-Tin-UIT.png'
                alt='UIT Icon' />
            <p className={styles.ShopName}>UIT SHOP</p>
            <SearchBar />
            <ul className={styles.HeaderRemainingItems}>
                <li><i className="fa-solid fa-clipboard iconSize"></i><span>Đơn hàng</span></li>
                <li><i className="fa-solid fa-cart-shopping iconSize"></i><span>Giỏ hàng</span></li>
                <li id='User'>
                    <i className="fa-solid fa-user iconSize"></i><span>User</span>
                    <ul>
                        <li>Đăng nhập</li>
                        <li>Đăng ký</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
