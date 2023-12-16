import React, { useContext } from 'react'
import styles from '../componentsCSS/NavigationHeader.module.css'
import { Link, Outlet } from 'react-router-dom'
import { Context } from './ReactContext'

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
    const { isLoggedIn, setIsLoggedIn, numberOfProductsInCart } = useContext(Context)
    function LogOut() {
        if (isLoggedIn) {
            window.alert('Bạn đã đăng xuất thành công')
            setIsLoggedIn(false)
        }

    }
    return (
        <>
            <div className={styles.Header} >
                <div className={styles.HeaderPart} style={{ flex: 2, justifyContent: 'flex-start' }} >
                    <Link to='/'><img className={styles.Icon}
                        src='https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-DH-Cong-Nghe-Thong-Tin-UIT.png'
                        alt='UIT Icon' /></Link>
                    <Link to='/'><p className={styles.ShopName}>UIT SHOP</p></Link>
                    <SearchBar />
                </div>
                <div className={styles.HeaderPart} style={{ flex: 1, }}>
                    <ul className={styles.HeaderRemainingItems}>
                        <li><Link to='/'><i className={`fa-solid fa-house ${styles.iconSize}`}></i><span>Trang Chủ</span></Link></li>
                        <li><Link to='orders'><i className={`fa-solid fa-clipboard ${styles.iconSize}`}></i><span>Đơn hàng</span></Link></li>
                        <li>
                            <Link to='cart'>
                                <div style={{ position: 'relative' }}>
                                    <i className={`fa-solid fa-cart-shopping ${styles.iconSize}`}></i>
                                    <div className={styles.counter}>{numberOfProductsInCart}</div>
                                </div>
                                <span>Giỏ hàng</span>
                            </Link>
                        </li>
                        <li onClick={LogOut}><Link to={`${isLoggedIn ? '' : 'login'}`}><i className={`fa-solid fa-user ${styles.iconSize}`}></i><span>{isLoggedIn ? 'Xin chào QTV' : 'Đăng nhập'}</span></Link></li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </>
    )
}
