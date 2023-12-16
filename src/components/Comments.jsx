import React, { useContext, useState } from 'react'
import styles from '../componentsCSS/Comments.module.css'
import { Context } from './ReactContext'
import CommentForm from './CommentForm'

const Customers = [{
  name: '21522712 - Phạm Minh Triết',
  stars: 5,
  comment: 'Rất tốt',
  date: '12/01/2018'
}, {
  name: '21522747 - Trịnh Tuấn Tú',
  stars: 5,
  comment: 'OK',
  date: '12/01/2018'

}, {
  name: '21522556 - Phạm Thanh Sơn',
  stars: 5,
  comment: 'Xài ngon',
  date: '12/01/2018'

}
]
function StarsDrawer({ numOfStars }) {
  let stars = []
  for (let i = 0; i < numOfStars; ++i) {
    stars.push(<i className={`fa-solid fa-star ${styles.iconSize}`} key={i}></i>)
  }
  for (let i = numOfStars; i < 5; ++i) {
    stars.push(<i className={`fa-regular fa-star ${styles.iconSize}`} key={i}></i>)
  }
  return (
    <>
      {
        stars
      }
    </>
  )
}
function CommentTag(props) {
  return (
    <div className={styles.tagContainer}>
      <div className={styles.profile}>
        <img src="https://bicolandiatravels.com/wp-content/uploads/2022/07/blank-profile-picture-mystery-man-avatar-973460.png"
          alt="" />
        <div>
          <p>{props.name}</p>
          <p style={{ fontStyle: 'italic', fontSize: '12px' }}>Đánh giá vào: {props.date}</p>
        </div>
      </div>
      <div className={styles.starsAndComment}>
        <StarsDrawer numOfStars={props.stars} />
        <p style={{ marginTop: '10px' }}>{props.comment}</p>
      </div>

    </div>
  )
}
function Comments() {
  const { isLoggedIn } = useContext(Context)
  const [customers, setCustomers] = useState(Customers)
  return (
    <div className={styles.comment_Container}>
      <div className={styles.comment_Area}>
        <h1>ĐÁNH GIÁ CỦA KHÁCH HÀNG</h1>
        <hr />
        {
          !isLoggedIn ? <p style={{ fontSize: '30px', textAlign: 'center', marginTop: '10px' }}>Vui lòng <strong>đăng nhập</strong> để đánh giá</p> :
            <CommentForm onSubmit={setCustomers} customers={customers} />
        }
        {
          customers.map((customer, index) => <CommentTag {...customer} key={index} />)
        }


      </div>
    </div>
  )
}

export default Comments