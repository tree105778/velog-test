import React, { useEffect, useRef, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import styles from './MyVelog.module.css';
import Header from '../components/Layout/Header.jsx';

function UserPosts() {
  const { userName: userId } = useParams();
  const [activeTab, setActiveTab] = useState('posts');
  const [underlinePosition, setUnderlinePosition] = useState(0);

  const tabRefs = useRef(null);

  useEffect(() => {
    const currentTab = tabRefs.current[activeTab];
    if (currentTab) {
      setUnderlinePosition(currentTab.offsetLeft);
    }
  }, [activeTab]);

  return (
    <div className={styles.MyVelogContainer}>
      <Header />
      <main className={styles.MyVelogBody}>
        <div className={styles.MyVelogProfileHeader}>
          <div className={styles.MyVelogProfileInfo}>
            <div className={styles.MyVelogProfile}>{userId}</div>

            <h1 className={styles.MyVelogTitle}>{userId}</h1>
          </div>
          <div className={styles.MyVelogFollowInfo}>
            <span className={styles.MyVelogFollowNum}>0</span>
            <span className={styles.MyVelogFollowText}>팔로워</span>
            <span className={styles.MyVelogFollowNum}>0</span>
            <span className={styles.MyVelogFollowText}>팔로잉</span>
          </div>
        </div>

        <div className={styles.MyVelogSectionTabContainer}>
          {['posts', 'series', 'about'].map((label) => (
            <a
              key={label}
              href={`${label}`}
              ref={tabRefs}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(label);
              }}
              className={`${styles.MyVelogSectionTab} ${activeTab === label ? styles.MyVelogActive : ''}`}
            >
              {label}
            </a>
          ))}
          <div
            className={styles.MyVelogUnderline}
            style={{ left: underlinePosition }}
          />
        </div>
        <Outlet />
      </main>
    </div>
  );
}

export default UserPosts;
