import React, { useContext, useState } from 'react'
import styles from '../componentsCSS/LogInPage.module.css'
import { useNavigate } from 'react-router-dom'
import { Context } from '../components/ReactContext'

function LogInForm() {
  const [mssv, setMSSV] = useState('')
  const [pass, setPass] = useState('')
  const { setIsLoggedIn } = useContext(Context)
  const navigate = useNavigate()
  function handleInputMSSV(e) {
    setMSSV(e.target.value)
  }
  function handleInputPassword(e) {
    setPass(e.target.value)
  }
  function handleOnClick() {
    if (mssv === '' && pass === '') {
      return;
    }
    else if (mssv === '') {
      window.alert('Vui lòng nhập mã sinh viên')
    }
    else if (pass === '') {
      window.alert('Vui lòng nhập mật khẩu')
    }
    else if (mssv === 'admin' && pass === 'admin') {
      setIsLoggedIn(true)
      window.alert('Đăng nhập thành công');
      navigate('/')
    }
    else {
      window.alert('Đăng nhập thất bại do Database không tồn tại');
    }
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <h3>ĐĂNG NHẬP</h3>
          <p>
            <label htmlFor='MSSV'>Mã sinh viên <span className={styles.importanceAsterisk}>*</span></label>
            <input type="text" id="MSSV" value={mssv} onChange={handleInputMSSV} />
          </p>
          <p>
            <label htmlFor='password'>Mật khẩu <span className={styles.importanceAsterisk}>*</span></label>
            <br />
            <input type="password" id="password" value={pass} onChange={handleInputPassword} />
          </p>
          <div className={styles.box_signUp}>
            <a className={styles.forgetPass} href='https://chungthuc.uit.edu.vn/ForgotPassword.aspx' target='_blank' rel='noreferrer'>Quên mật khẩu?</a>
            <p>
              <button className={styles.box_button_signUp} onClick={handleOnClick}>Đăng nhập</button>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LogInForm