import React from 'react';
import introduction from '../assets/Introduction.jpg';
import styles from './MyVelog.module.css';

function MyVelogAbout() {
  return (
    <>
      <img
        src={introduction}
        alt="소개 이미지"
        className={styles.IntroductionImage}
      />
      <p className={styles.IntroductionPtag}>소개가 작성되지 않았습니다.</p>
      <button className={styles.MyVelogIntroduceButton}>소개글 작성하기</button>
    </>
  );
}

export default MyVelogAbout;
