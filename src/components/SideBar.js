import React from 'react'
import styles from "../componentsCSS/SideBar.module.css"
export default function SideBar() {
    return (
        <div className={styles.Sidebar}>
            <h2 style={{ textAlign: 'center' }}>Danh mục sản phẩm</h2>
            <br />
            <p><i className="fa-solid fa-laptop" style={{ marginRight: '10px' }}></i>Laptop</p>
            <p><i className="fa-solid fa-rug" style={{ marginRight: '10px' }}></i>Lót chuột</p>
            <p><i className="fa-solid fa-computer-mouse" style={{ marginRight: '10px' }}></i>Chuột</p>
            <p><i className="fa-solid fa-keyboard" style={{ marginRight: '10px' }}></i>Bàn phím</p>
            <p><i className="fa-solid fa-school" style={{ marginRight: '10px' }}></i>Đồ của UIT</p>
            <p><i className="fa-solid fa-ellipsis" style={{ marginRight: '10px' }}></i>Khác</p>
        </div>
    )
}
