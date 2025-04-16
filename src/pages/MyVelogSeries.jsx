import React from 'react';
import series from '../assets/series.jpg';
import styles from './MyVelog.module.css';

function MyVelogSeries() {
  return (
    <>
      <img
        src={series}
        alt="시리즈 이미지"
        className={styles.MyVelogSeriesImage}
      />
      <p className={styles.SeriesPtag}>시리즈가 없습니다.</p>
    </>
  );
}

export default MyVelogSeries;
