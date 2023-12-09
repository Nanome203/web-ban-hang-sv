import React from 'react'
import styles from "../componentsCSS/SideBar.module.css"
import { Link } from 'react-router-dom'
export default function SideBar() {
    return (
        <div className={styles.Sidebar}>
            <h2 style={{ textAlign: 'center' }}>Danh mục sản phẩm</h2>
            <br />
            <Link to='laptop'><i className="fa-solid fa-laptop" style={{ marginRight: '10px' }}></i>Laptop</Link>
            <Link to='mousepad'><i className="fa-solid fa-rug" style={{ marginRight: '10px' }}></i>Lót chuột</Link>
            <Link to='mouse'><i className="fa-solid fa-computer-mouse" style={{ marginRight: '10px' }}></i>Chuột</Link>
            <Link to='keyboard'><i className="fa-solid fa-keyboard" style={{ marginRight: '10px' }}></i>Bàn phím</Link>
            <Link to='UITproducts'><i className="fa-solid fa-school" style={{ marginRight: '10px' }}></i>Đồ UIT</Link>
            <Link to='others'><i className="fa-solid fa-ellipsis" style={{ marginRight: '10px' }}></i>Khác</Link>
        </div>
    )
}
