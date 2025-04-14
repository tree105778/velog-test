import React, { useState } from 'react';
import styles from './Tabs.module.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('trending');
  const [selectedTimeframe, setSelectedTimeframe] = useState('week');
  const [showTimeframeDropdown, setShowTimeframeDropdown] = useState(false);
  const [showMenuDropdown, setShowMenuDropdown] = useState(false);

  const tabs = [
    {
      key: 'trending',
      label: '트렌딩',
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
        </svg>
      ),
      href: '/trending/week',
    },
    {
      key: 'recent',
      label: '최신',
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
          <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
        </svg>
      ),
      href: '/recent',
    },
    {
      key: 'feed',
      label: '피드',
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <circle cx="6.18" cy="17.82" r="2.18" />
          <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z" />
        </svg>
      ),
      href: '/feed',
    },
  ];

  const timeframes = [
    { key: 'day', label: '오늘', href: '/trending/day' },
    { key: 'week', label: '이번 주', href: '/trending/week' },
    { key: 'month', label: '이번 달', href: '/trending/month' },
    { key: 'year', label: '올해', href: '/trending/year' },
  ];

  const labelMap = {
    day: '오늘',
    week: '이번 주',
    month: '이번 달',
    year: '올해',
  };

  return (
    <div
      className={`${styles.HomeTab_wrapper__Z8vJT} ${styles.responsive_mainHeaderResponsive__S6XhY}`}
    >
      <nav className={styles.HomeTab_left__o1RQE}>
        <div className={styles.HomeTab_tab__viwzb}>
          {tabs.map((tab) => (
            <a
              key={tab.key}
              href={tab.href}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(tab.key);
              }}
              className={
                activeTab === tab.key ? styles.HomeTab_active__qHDGO : ''
              }
            >
              {tab.icon}
              <span>{tab.label}</span>
            </a>
          ))}
          <div
            className={styles.HomeTab_indicator__wQ03f}
            style={{
              left: `${tabs.findIndex((t) => t.key === activeTab) * 80}px`,
              transition: 'left 2%',
            }}
          ></div>
        </div>
      </nav>

      <div className={styles.HomeTab_right__GMLbd}>
        <div
          className={styles.HomeTab_selector__I5TLL}
          onClick={() => {
            setShowTimeframeDropdown(!showTimeframeDropdown);
            setShowMenuDropdown(false);
          }}
        >
          {labelMap[selectedTimeframe]}
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </div>
        {/* 세로 점 버튼 */}
        <svg
          className={styles.HomeTab_extra__x0Vmq}
          onClick={() => {
            setShowMenuDropdown(!showMenuDropdown);
            setShowTimeframeDropdown(false);
          }}
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>

        {/* 시간 필터 드롭다운 */}
        {showTimeframeDropdown && (
          <div
            className={styles.TimeframePicker_aligner__hldJ2}
            style={{ opacity: 1, transform: 'scale(1)' }}
          >
            <div className={styles.TimeframePicker_block__zLMBK}>
              <ul>
                {timeframes.map((t) => (
                  <li key={t.key}>
                    <a
                      className={
                        t.key === selectedTimeframe
                          ? styles.TimeframePicker_active__T3EQK
                          : ''
                      }
                      href={t.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedTimeframe(t.key);
                        setShowTimeframeDropdown(false);
                      }}
                    >
                      {t.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* 메뉴 드롭다운 */}
        {showMenuDropdown && <div className={styles.MenuDropdown}></div>}
      </div>
    </div>
  );
};

export default Tabs;
