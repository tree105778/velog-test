import React, { useState } from 'react';
import styles from './MyVelog.module.css';
import { useLoaderData } from 'react-router-dom';

function MyVelogPosts() {
  const [searchTerm, setSearchTerm] = useState('');
  const posts = useLoaderData();

  const [selectedTag, setSelectedTag] = useState('전체보기');

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
    <>
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

      <div className={styles.MyVelogTabContent}>
        <div className={styles.MyVelogPostsWrapper}>
          <aside className={styles.MyVelogTagSidebar}>
            <h4 className={styles.MyVelogTagTitle}>태그 목록</h4>
            <ul className={styles.MyVelogTagList}>
              <li
                className={`${styles.MyVelogTagItem} ${selectedTag === '전체보기' ? styles.MyVelogTagActive : ''}`}
                onClick={() => setSelectedTag('전체보기')}
              >
                전체보기{' '}
                <span className={styles.MyVelogTagCount}>({posts.length})</span>
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
                    <span className={styles.MyVelogTagCount}>({count})</span>
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
                    <h2 className={styles.MyVelogPostTitle}>{post.title}</h2>
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
                  <svg
                    className={styles.MyVelogLikeImage}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="m18 1-6 4-6-4-6 5v7l12 10 12-10V6z" />
                  </svg>
                  <span className={styles.MyVelogLikeCount}>0</span>
                  <span className={styles.MyVelogDotDivider1}>·</span>
                  <div className={styles.MyVelogPrivateBadge}>
                    <svg
                      className={styles.MyVelogPrivateIcon}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M17.625 9H16.5V6.81c0-2.47-1.969-4.522-4.44-4.56a4.514 4.514 0 0 0-4.56 4.5V9H6.375A1.88 1.88 0 0 0 4.5 10.875v9a1.88 1.88 0 0 0 1.875 1.875h11.25a1.88 1.88 0 0 0 1.875-1.875v-9A1.88 1.88 0 0 0 17.625 9zm-4.969 5.85v3.225a.672.672 0 0 1-.623.675.657.657 0 0 1-.69-.656V14.85a1.5 1.5 0 0 1-.838-1.486 1.5 1.5 0 1 1 2.152 1.486zM15.187 9H8.814V6.75c0-.848.332-1.645.937-2.25A3.16 3.16 0 0 1 12 3.562a3.16 3.16 0 0 1 2.25.938 3.16 3.16 0 0 1 .938 2.25V9z"
                      />
                    </svg>
                    <span className={styles.MyVelogPrivateText}>비공개</span>
                  </div>
                </div>
              ))
            ) : (
              <p>검색 결과가 없습니다.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyVelogPosts;
