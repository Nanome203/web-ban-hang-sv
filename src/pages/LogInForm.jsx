import React from 'react'
import styles from '../componentsCSS/LogInPage.module.css'
function LogInForm() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <h3>Đăng nhập vào hệ thống</h3>
          <p>
            <span>Mã sinh viên </span>
            <br />
            <input type="text" id="MSSV" />
          </p>
          <p>
            <span>Mật khẩu</span>
            <br />
            <input type="password" id="password" />
          </p>
          <div className={styles.box_signUp}>
            <a href='https://www.google.com/' target='_blank' rel='noreferrer'>Quên mật khẩu?</a>
            <p>
              <button className={styles.box_button_signUp}>Đăng nhập</button>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LogInForm