import React, { useContext } from 'react'
import styles from '../componentsCSS/Comments.module.css'
import { Context } from './ReactContext'

const customers = [{
  name: '21522712 - Phạm Minh Triết',
  stars: 5,
  comment: 'Rất tốt',
  date: '12/01/2018'
}, {
  name: 'Hai',
  stars: 4,
  comment: 'OK',
  date: '12/01/2018'

}, {
  name: 'Ba',
  stars: 3,
  comment: 'Tạm ổn',
  date: '12/01/2018'

}
]
function StarsDrawer({ numOfStars }) {
  let stars = []
  for (let i = 0; i < numOfStars; ++i) {
    stars.push(<i className={`fa-solid fa-star ${styles.iconSize}`}></i>)
  }
  for (let i = 0; i < 5 - numOfStars; ++i) {
    stars.push(<i className={`fa-regular fa-star ${styles.iconSize}`}></i>)
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
  return (
    <div className={styles.comment_Container}>
      <div className={styles.comment_Area}>
        <h1>ĐÁNH GIÁ CỦA KHÁCH HÀNG</h1>
        <hr />
        {
          customers.map((customer, index) => <CommentTag {...customer} key={index} />)
        }
        <p style={{ fontSize: '30px', textAlign: 'center' }}>Vui lòng <strong>đăng nhập</strong> để đánh giá</p>

      </div>
    </div>
  )
}

export default Comments