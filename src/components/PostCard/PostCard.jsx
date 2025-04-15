import React from 'react';
import styles from './PostCard.module.css';

const PostCard = ({ post }) => {
  return (
    <li className={styles.postCard}>
      <a href={post.link} className={styles.link}>
        <div className={styles.thumb} style={{ paddingTop: '52.1921%' }}>
          <img src={post.thumbnailUrl} alt={`${post.title} post`} />
        </div>
      </a>

      <div className={styles.content}>
        <a href={post.link} className={styles.link}>
          <h4 className={styles.title}>{post.title}</h4>
          <div>
            <p className={styles.summary}>{post.description}</p>
          </div>
        </a>
        <div className={styles.meta}>
          <span>{post.date}</span>
          <span className={styles.dot}>·</span>
          <span>{post.comments}개의 댓글</span>
        </div>
      </div>

      <div className={styles.footer}>
        <a className={styles.user} href={post.authorLink}>
          <img
            src={post.authorImageUrl}
            alt={`user thumbnail of ${post.author}`}
          />
          <span>
            by <b>{post.author}</b>
          </span>
        </a>
        <div className={styles.likes}>
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="m18 1-6 4-6-4-6 5v7l12 10 12-10V6z"
            ></path>
          </svg>
          {post.likes}
        </div>
      </div>
    </li>
  );
};

export default PostCard;
