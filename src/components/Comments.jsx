import React, { useContext, useState } from 'react'
import styles from '../componentsCSS/Comments.module.css'
import { Context } from './ReactContext'
import CommentForm from './CommentForm'

const Customers = [{
  img: 'https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/347867093_987409828923986_5607195584231751892_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=6o0LY9BTSLwAX_ZgIbw&_nc_ht=scontent.fsgn2-11.fna&oh=00_AfDHEklzGqROg9EnsDI5keFY5INU9a8hGmwO0HiG2VWzxA&oe=6582C5F5',
  name: '21522712 - Phạm Minh Triết',
  stars: 5,
  comment: 'Rất tốt',
  date: '12/01/2018'
}, {
  img: 'https://scontent.fsgn2-9.fna.fbcdn.net/v/t1.6435-9/123079378_102793201640852_7419969150751660396_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=be3454&_nc_ohc=K8wPMe_zd0oAX-J9e0c&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfCRC8GMTrii2rMO4Qz01qrSfYtI_oZGLxM9uhm6DiDWuw&oe=65A4E478',
  name: '21522747 - Trịnh Tuấn Tú',
  stars: 5,
  comment: 'OK',
  date: '12/01/2018'

}, {
  img: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/401850459_1813251449129568_2578352865903007250_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=_YZgX2AeYhAAX8ba51z&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfBdguP7nhcH7Hr3Pv3zw5CxZ-l4pSp8k-hmE92tcyJJlQ&oe=65829476',
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
        <img src={props.img}
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