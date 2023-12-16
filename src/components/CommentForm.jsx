import React, { useState } from 'react'
import styles from '../componentsCSS/CommentForm.module.css'

function StarSelector({ setNumberOfStars, numberOfStars }) {
  const [star1, setStar1] = useState(`fa-regular fa-star ${styles.iconSize}`);
  const [star2, setStar2] = useState(`fa-regular fa-star ${styles.iconSize}`);
  const [star3, setStar3] = useState(`fa-regular fa-star ${styles.iconSize}`);
  const [star4, setStar4] = useState(`fa-regular fa-star ${styles.iconSize}`);
  const [star5, setStar5] = useState(`fa-regular fa-star ${styles.iconSize}`);
  if (numberOfStars === 0)
    return (
      <p className={styles.starContainer}>
        <i className={`fa-regular fa-star ${styles.iconSize}`} onClick={handlerStar1}></i>
        <i className={`fa-regular fa-star ${styles.iconSize}`} onClick={handlerStar2}></i>
        <i className={`fa-regular fa-star ${styles.iconSize}`} onClick={handlerStar3}></i>
        <i className={`fa-regular fa-star ${styles.iconSize}`} onClick={handlerStar4}></i>
        <i className={`fa-regular fa-star ${styles.iconSize}`} onClick={handlerStar5}></i>
      </p>
    )
  return (
    <p className={styles.starContainer}>
      <i className={star1} onClick={handlerStar1}></i>
      <i className={star2} onClick={handlerStar2}></i>
      <i className={star3} onClick={handlerStar3}></i>
      <i className={star4} onClick={handlerStar4}></i>
      <i className={star5} onClick={handlerStar5}></i>
    </p>
  )
  function handlerStar1() {
    setStar1(`fa-solid fa-star ${styles.iconSize}`)
    setStar2(`fa-regular fa-star ${styles.iconSize}`)
    setStar3(`fa-regular fa-star ${styles.iconSize}`)
    setStar4(`fa-regular fa-star ${styles.iconSize}`)
    setStar5(`fa-regular fa-star ${styles.iconSize}`)
    setNumberOfStars(1);
  }
  function handlerStar2() {
    setStar1(`fa-solid fa-star ${styles.iconSize}`)
    setStar2(`fa-solid fa-star ${styles.iconSize}`)
    setStar3(`fa-regular fa-star ${styles.iconSize}`)
    setStar4(`fa-regular fa-star ${styles.iconSize}`)
    setStar5(`fa-regular fa-star ${styles.iconSize}`)
    setNumberOfStars(2);

  }
  function handlerStar3() {
    setStar1(`fa-solid fa-star ${styles.iconSize}`)
    setStar2(`fa-solid fa-star ${styles.iconSize}`)
    setStar3(`fa-solid fa-star ${styles.iconSize}`)
    setStar4(`fa-regular fa-star ${styles.iconSize}`)
    setStar5(`fa-regular fa-star ${styles.iconSize}`)
    setNumberOfStars(3);
  } function handlerStar4() {
    setStar1(`fa-solid fa-star ${styles.iconSize}`)
    setStar2(`fa-solid fa-star ${styles.iconSize}`)
    setStar3(`fa-solid fa-star ${styles.iconSize}`)
    setStar4(`fa-solid fa-star ${styles.iconSize}`)
    setStar5(`fa-regular fa-star ${styles.iconSize}`)
    setNumberOfStars(4);

  } function handlerStar5() {
    setStar1(`fa-solid fa-star ${styles.iconSize}`)
    setStar2(`fa-solid fa-star ${styles.iconSize}`)
    setStar3(`fa-solid fa-star ${styles.iconSize}`)
    setStar4(`fa-solid fa-star ${styles.iconSize}`)
    setStar5(`fa-solid fa-star ${styles.iconSize}`)
    setNumberOfStars(5);
  }


}
function CommentForm({ onSubmit, customers }) {
  const [numberOfStars, setNumberOfStars] = useState(0);
  const [comment, setComment] = useState('')
  const [result, setResult] = useState('')
  let date = new Date();
  date = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
  function handleSubmit() {
    if (numberOfStars === 0 && comment === '')
      return
    else if (numberOfStars === 0) {
      setResult('Vui lòng chọn đánh giá sao cho chúng tôi')
    }
    // else if (comment === '') {
    //   setResult('Vui lòng điền đánh giá')
    // }
    else {
      let newCustomers = [{
        img: 'https://bicolandiatravels.com/wp-content/uploads/2022/07/blank-profile-picture-mystery-man-avatar-973460.png',
        name: 'Admin',
        stars: numberOfStars,
        comment: comment,
        date: date
      }, ...customers]
      onSubmit(newCustomers)
      setResult('Gửi đánh giá thành công')
      setNumberOfStars(0);
      setComment('');
      setTimeout(() => setResult(''), 3000)
    }
  }
  return (
    <div className={styles.formContainer}>
      <h2>Đánh giá mức độ hài lòng của bạn</h2>
      <StarSelector setNumberOfStars={setNumberOfStars} numberOfStars={numberOfStars} />
      <textarea rows={6} cols={100} placeholder='Nhập nhận xét' value={comment} onChange={(e) => setComment(e.target.value)} />
      <button onClick={handleSubmit}>Gửi</button>
      <p style={{ margin: '20px 0', color: 'red', fontStyle: 'italic', fontSize: '17px', fontWeight: '500' }}>{result}</p>
    </div>
  )
}

export default CommentForm