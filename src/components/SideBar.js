import React from 'react'
import styles from "../componentsCSS/SideBar.module.css"
export default function SideBar() {
    return (
        <div className={styles.Sidebar}>
            <h2 style={{ textAlign: 'center' }}>Danh mục sản phẩm</h2>
            <br />
            <a href='#'><i className="fa-solid fa-laptop" style={{ marginRight: '10px' }}></i>Laptop</a>
            <a href='#'><i className="fa-solid fa-rug" style={{ marginRight: '10px' }}></i>Lót chuột</a>
            <a href='#'><i className="fa-solid fa-computer-mouse" style={{ marginRight: '10px' }}></i>Chuột</a>
            <a href='#'><i className="fa-solid fa-keyboard" style={{ marginRight: '10px' }}></i>Bàn phím</a>
            <a href='#'><i className="fa-solid fa-school" style={{ marginRight: '10px' }}></i>Đồ UIT</a>
            <a href='#'><i className="fa-solid fa-ellipsis" style={{ marginRight: '10px' }}></i>Khác</a>
        </div>
    )
}
