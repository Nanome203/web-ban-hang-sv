import React from 'react'
import styles from '../componentsCSS/LogInPage.module.css'
import { Link } from 'react-router-dom';
function LogInForm() {
  function handleOnClick() {
    window.alert('Không tồn tại database. Đăng nhập thất bại\nĐang quay lại trang chủ');
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <h3>LOG IN</h3>
          <p>
            <label htmlFor='MSSV'>Mã sinh viên <span className={styles.importanceAsterisk}>*</span></label>
            <input type="text" id="MSSV" />
          </p>
          <p>
            <label htmlFor='password'>Mật khẩu <span className={styles.importanceAsterisk}>*</span></label>
            <br />
            <input type="password" id="password" />
          </p>
          <div className={styles.box_signUp}>
            <a href='https://chungthuc.uit.edu.vn/ForgotPassword.aspx' target='_blank' rel='noreferrer'>Quên mật khẩu?</a>
            <p>
              <Link to='/'><button className={styles.box_button_signUp} onClick={handleOnClick}>Đăng nhập</button></Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LogInForm