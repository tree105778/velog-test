import React, { useState } from 'react';
import styles from './MyVelog.module.css';
import profileImg from '../assets/name.jpg';

const MyVelog = () => {
  const [activeTab, setActiveTab] = useState('글');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('전체보기');

  const posts = [
    { id: 1, title: 'test', description: 'test', tag: 'test' },
    { id: 2, title: 'test1', description: 'test1', tag: 'test1' },
    { id: 3, title: 'test3', description: 'test3', tag: 'test3' },
  ];

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
    <div className={styles.myVelogContainer}>
      <header className={styles.header}>
        <div className={styles.logo}>test.log</div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <button className={styles.navItem}>새 글 작성</button>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.body}>
        <div className={styles.profileHeader}>
          {/* 이미지와 이름 부분 */}
          <div className={styles.profileInfo}>
            <img
              src={profileImg}
              alt="프로필 이미지"
              className={styles.profileImage}
            />
            <h1 className={styles.title}>한종균</h1>
          </div>

          {/* 팔로워 및 팔로잉 정보 */}
          <div className={styles.followInfo}>
            <span className={styles.followNum}>0</span>
            <span className={styles.followText}>팔로워</span>
            <span className={styles.followNum}>0</span>
            <span className={styles.followText}>팔로잉</span>
          </div>
        </div>

        {/* <div className={styles.followInfo}>
          <span className={styles.followNum}>0</span>
          <span className={styles.followText}>팔로워</span>
          <span className={styles.followNum}>0</span>
          <span className={styles.followText}>팔로잉</span>
        </div> */}

        <div className={styles.sectionTabContainer}>
          {['글', '시리즈', '소개'].map((label) => (
            <a
              key={label}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(label);
              }}
              className={`${styles.sectionTab} ${activeTab === label ? styles.active : ''}`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className={styles.searchContainer}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="검색어를 입력하세요"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className={styles.searchIcon}
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

        <div className={styles.tabContent}>
          {activeTab === '글' && (
            <div className={styles.postsWrapper}>
              <aside className={styles.tagSidebar}>
                <h4 className={styles.tagTitle}>태그 목록</h4>
                <ul className={styles.tagList}>
                  <li
                    className={`${styles.tagItem} ${selectedTag === '전체보기' ? styles.tagActive : ''}`}
                    onClick={() => setSelectedTag('전체보기')}
                  >
                    전체보기{' '}
                    <span className={styles.tagCount}>({posts.length})</span>
                  </li>
                  {Object.entries(tagCountMap).map(([tag, count]) => (
                    <li
                      key={tag}
                      className={`${styles.tagItem} ${selectedTag === tag ? styles.tagActive : ''}`}
                      onClick={() => setSelectedTag(tag)}
                    >
                      {tag} <span className={styles.tagCount}>({count})</span>
                    </li>
                  ))}
                </ul>
              </aside>

              <div className={styles.postsContainer}>
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post, index) => (
                    <div
                      key={post.id}
                      className={`${styles.postCard} ${index !== filteredPosts.length - 1 ? styles.withBorder : ''}`}
                      onClick={() => alert(`게시글 ${post.id} 상세 보기`)}
                    >
                      <div className={styles.postContent}>
                        <h2 className={styles.postTitle}>{post.title}</h2>
                        <p className={styles.postDescription}>
                          {post.description}
                        </p>
                      </div>
                      <div className={styles.postInfo}>
                        <p className={styles.postInfoText}>{post.tag}</p>
                      </div>
                      <span className={styles.postTime}>30분전</span>
                      <span className={styles.dotDivider}>·</span>
                      <span className={styles.postCommentCount}>
                        0개의 댓글
                      </span>
                    </div>
                  ))
                ) : (
                  <p>검색 결과가 없습니다.</p>
                )}
              </div>
            </div>
          )}

          {activeTab === '시리즈' && <p>시리즈가 없습니다.</p>}
          {activeTab === '소개' && <p>소개가 작성되지 않았습니다.</p>}
        </div>
      </main>
    </div>
  );
};

export default MyVelog;
