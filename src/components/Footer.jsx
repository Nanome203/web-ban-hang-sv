import React from "react";
import styles from "../componentsCSS/Footer.module.css";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.imageAndAddress}>
        <img src="https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-DH-Cong-Nghe-Thong-Tin-UIT.png"
          alt="" />
        <h1>UIT SHOP</h1>
        <p>Khu phố 6, phường Linh Trung, Thành phố Thủ Đức, TP.HCM</p>
      </div>
      <div className={styles.otherInfoContainer}>
        <div className={styles.otherInfo}>
          <h2>Dịch vụ</h2>
          <p>Điều khoản sử dụng</p>
          <p>Chính sách bảo mật thông tin cá nhân</p>
          <p>Chính sách bảo mật thanh toán</p>
          <p>Chính sách giải quyết khiếu nại</p>
          <p>Điều khoản sử dụng</p>


        </div>
        <div className={styles.otherInfo}>
          <h2>Về UIT SHOP</h2>
          <p>Giới thiệu UIT SHOP</p>
          <p>UIT SHOP Blog</p>
          <p>Tuyển dụng</p>
          <p>Bán hàng doanh nghiệp</p>
          <p>Điều kiện vận chuyển</p>
        </div>
        <div className={styles.otherInfo}>
          <h2>Liên hệ</h2>
          <p><i className="fa-solid fa-envelope"></i>: uitshop@uit.edu.vn</p>
          <p><i className="fa-solid fa-phone"></i>: 123456789</p>
        </div>

      </div>
    </div>
  )
}