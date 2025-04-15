import React, { useEffect, useRef, useState } from 'react';
import styles from './MyVelog.module.css';
import profileImg from '../assets/name.jpg';
import series from '../assets/series.jpg';
import introduction from '../assets/Introduction.jpg';
import Header from '../components/Layout/Header';

const MyVelog = ({ userid }) => {
  const [activeTab, setActiveTab] = useState('글');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('전체보기');
  const [underlinePosition, setUnderlinePosition] = useState(0);

  const tabRefs = useRef({});
  const posts = [
    { id: 1, title: 'test', description: 'test', tag: 'test' },
    { id: 2, title: 'test1', description: 'test1', tag: 'test1' },
    { id: 3, title: 'test3', description: 'test3', tag: 'test3' },
  ];

  useEffect(() => {
    const currentTab = tabRefs.current[activeTab];
    if (currentTab) {
      setUnderlinePosition(currentTab.offsetLeft);
    }
  }, [activeTab]);

  const filteredPosts = posts.filter((post) => {
    const matchSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchTag = selectedTag === '전체보기' || post.tag === selectedTag;
    return matchSearch && matchTag;
  });

  const tagCountMap = posts.reduce((acc, post) => {
    acc[post.tag] = (acc[post.tag] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className={styles.MyVelogContainer}>
      <Header />
      <main className={styles.MyVelogBody}>
        <div className={styles.MyVelogProfileHeader}>
          <div className={styles.MyVelogProfileInfo}>
            <img
              src={profileImg}
              alt="프로필 이미지"
              className={styles.MyVelogProfileImage}
            />
            <h1 className={styles.MyVelogTitle}>{userid}</h1>
          </div>
          <div className={styles.MyVelogFollowInfo}>
            <span className={styles.MyVelogFollowNum}>0</span>
            <span className={styles.MyVelogFollowText}>팔로워</span>
            <span className={styles.MyVelogFollowNum}>0</span>
            <span className={styles.MyVelogFollowText}>팔로잉</span>
          </div>
        </div>

        <div className={styles.MyVelogSectionTabContainer}>
          {['글', '시리즈', '소개'].map((label) => (
            <a
              key={label}
              href="#"
              ref={(el) => (tabRefs.current[label] = el)}
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

        {activeTab === '글' && (
          <div className={styles.MyVelogSearchContainer}>
            <input
              type="text"
              className={styles.MyVelogSearchInput}
              placeholder="검색어를 입력하세요"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className={styles.MyVelogSearchIcon}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M23 21l-5.6-5.6a9 9 0 1 0-1.4 1.4L21 21l2 2zM10 16a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"
                fill="#888"
              />
            </svg>
          </div>
        )}

        <div className={styles.MyVelogTabContent}>
          {activeTab === '글' && (
            <div className={styles.MyVelogPostsWrapper}>
              <aside className={styles.MyVelogTagSidebar}>
                <h4 className={styles.MyVelogTagTitle}>태그 목록</h4>
                <ul className={styles.MyVelogTagList}>
                  <li
                    className={`${styles.MyVelogTagItem} ${selectedTag === '전체보기' ? styles.MyVelogTagActive : ''}`}
                    onClick={() => setSelectedTag('전체보기')}
                  >
                    전체보기{' '}
                    <span className={styles.MyVelogTagCount}>
                      ({posts.length})
                    </span>
                  </li>
                  {Object.entries(tagCountMap)
                    .reverse()
                    .map(([tag, count]) => (
                      <li
                        key={tag}
                        className={`${styles.MyVelogTagItem1} ${selectedTag === tag ? styles.MyVelogTagActive : ''}`}
                        onClick={() => setSelectedTag(tag)}
                      >
                        {tag}{' '}
                        <span className={styles.MyVelogTagCount}>
                          ({count})
                        </span>
                      </li>
                    ))}
                </ul>
              </aside>

              <div className={styles.MyVelogPostsContainer}>
                {filteredPosts.length > 0 ? (
                  [...filteredPosts].reverse().map((post, index) => (
                    <div
                      key={post.id}
                      className={`${styles.MyVelogPostCard} ${index !== filteredPosts.length - 1 ? styles.MyVelogWithBorder : ''}`}
                      onClick={() => alert(`게시글 ${post.id} 상세 보기`)}
                    >
                      <div className={styles.MyVelogPostContent}>
                        <h2 className={styles.MyVelogPostTitle}>
                          {post.title}
                        </h2>
                        <p className={styles.MyVelogPostDescription}>
                          {post.description}
                        </p>
                      </div>
                      <div className={styles.MyVelogPostInfo}>
                        <p className={styles.MyVelogPostInfoText}>{post.tag}</p>
                      </div>
                      <span className={styles.MyVelogPostTime}>30분전</span>
                      <span className={styles.MyVelogDotDivider}>.</span>
                      <span className={styles.MyVelogPostCommentCount}>
                        0개의 댓글
                      </span>
                      <span className={styles.MyVelogDotDivider1}>·</span>
                    </div>
                  ))
                ) : (
                  <p>검색 결과가 없습니다.</p>
                )}
              </div>
            </div>
          )}
          {activeTab === '시리즈' && (
            <>
              <img
                src={series}
                alt="시리즈 이미지"
                className={styles.MyVelogSeriesImage}
              />
              <p className={styles.SeriesPtag}>시리즈가 없습니다.</p>
            </>
          )}
          {activeTab === '소개' && (
            <>
              <img
                src={introduction}
                alt="소개 이미지"
                className={styles.IntroductionImage}
              />
              <p className={styles.IntroductionPtag}>
                소개가 작성되지 않았습니다.
              </p>
              <button className={styles.MyVelogIntroduceButton}>
                소개글 작성하기
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default MyVelog;
