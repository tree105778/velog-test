import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import styles from './MyVelog.module.css';
import Header from '../components/Layout/Header.jsx';

function UserPosts() {
  const { userName: userId } = useParams();
  const labelsMap = { posts: '글', series: '시리즈', about: '소개' };
  const [activeTab, setActiveTab] = useState('posts');
  const [underlinePosition, setUnderlinePosition] = useState(0);
  const tabRefs = useRef([]);

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
            <div className={styles.MyVelogProfile}>
              {userId.replace(/^@/, '')}
            </div>

            <h1 className={styles.MyVelogTitle}>{userId.replace(/^@/, '')}</h1>
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
            <NavLink
              key={label}
              to={`${label}`}
              ref={(el) => (tabRefs.current[label] = el)}
              className={({ isActive }) => {
                if (isActive) setActiveTab(label);
                return `${styles.MyVelogSectionTab} ${isActive ? styles.MyVelogActive : ''}`;
              }}
            >
              {labelsMap[label]}
            </NavLink>
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
