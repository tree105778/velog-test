import React, { useState, useRef, useEffect } from 'react';
import styles from './Tabs.module.css';
import { NavLink } from 'react-router-dom';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('trending');
  const [selectedTimeframe, setSelectedTimeframe] = useState('week');
  const [showTimeframeDropdown, setShowTimeframeDropdown] = useState(false);
  const [showMenuDropdown, setShowMenuDropdown] = useState(false);
  const [indicatorLeft, setIndicatorLeft] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);

  const tabRefs = useRef([]);
  const menuRef = useRef(null);
  const timeframeRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        timeframeRef.current &&
        !timeframeRef.current.contains(e.target)
      ) {
        setShowMenuDropdown(false);
        setShowTimeframeDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
      href: '/trending',
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

  const activeTabIndex = tabs.findIndex((t) => t.key === activeTab);

  useEffect(() => {
    const activeEl = tabRefs.current[activeTabIndex];
    if (activeEl) {
      setIndicatorLeft(activeEl.offsetLeft);
      setIndicatorWidth(activeEl.offsetWidth);
    }
  }, [activeTab, activeTabIndex]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.tabsWrapper}>
          <nav className={styles.tabs}>
            {tabs.map((tab, index) => (
              <NavLink
                key={tab.key}
                ref={(el) => (tabRefs.current[index] = el)}
                to={tab.href}

                className={({ isActive }) => {
                  if (isActive) {
                    setActiveTab(tab.key);
                    return styles.activeTab;
                  }
                  return null;
                }}
              >
                <span
                  className={
                    activeTab === tab.key
                      ? styles.activeTabIcon
                      : styles.tabIcon
                  }
                >
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
              </NavLink>
            ))}
            <div
              className={styles.indicator}
              style={{ left: indicatorLeft, width: indicatorWidth }}
            ></div>
          </nav>
        </div>

        {activeTab === 'trending' && (
          <div className={styles.selectorArea} ref={timeframeRef}>
            <div
              className={styles.selector}
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

            {showTimeframeDropdown && (
              <div
                ref={timeframeRef}
                className={`${styles.dropdownWrap} ${
                  showTimeframeDropdown ? '' : styles.hide
                }`}
              >
                <div className={styles.dropdown}>
                  <ul>
                    {timeframes.map((t) => (
                      <li key={t.key}>
                        <a
                          className={
                            t.key === selectedTimeframe
                              ? styles.activeTimeframe
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
          </div>
        )}

        <div className={styles.extra} ref={menuRef}>
          <svg
            onClick={() => {
              setShowMenuDropdown(!showMenuDropdown);
              setShowTimeframeDropdown(false);
            }}
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            class="HomeTab_extra__x0Vmq"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
          </svg>
        </div>

        {showMenuDropdown && (
          <div
            className={`${styles.menuDropdown} ${
              showMenuDropdown ? '' : styles.hide
            }`}
          >
            <ul>
              <li>
                <a href="#">공지사항</a>
              </li>
              <li>
                <a href="#">태그 목록</a>
              </li>
              <li>
                <a href="#">서비스 정책</a>
              </li>
              <li>
                <a href="#">Slack</a>
              </li>
            </ul>
            <div className={styles.menuContact}>
              <strong>문의</strong>
              contact@velog.io
            </div>
            <div className={styles.menuLogo}>
              <img
                src="https://graphcdn.io/badge.svg"
                alt="Powered by Stellate"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
