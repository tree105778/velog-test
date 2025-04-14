import React from 'react';
import styles from './PostCard.module.css';

const PostCard = ({ post }) => {
  return (
    <a href={post.link} className={styles['post-card']}>
      <img
        src={post.image}
        alt={post.title}
        className={styles['post-thumbnail']}
      />

      <div className={styles['post-body']}>
        <h4 className={styles['post-title']}>{post.title}</h4>
        <p className={styles['post-description']}>{post.summary}</p>
        <div className={styles['post-meta']}>
          {post.date} · {post.comments}개의 댓글
        </div>

        <div className={styles['post-footer']}>
          <div className={styles['author-info']}>
            <img
              src={post.profile}
              alt={post.author}
              className={styles['author-avatar']}
            />
            <span className={styles['author-name']}>
              by <b>{post.author}</b>
            </span>
          </div>
          <div className={styles['likes']}>🤍 {post.likes}</div>
        </div>
      </div>
    </a>
  );
};

export default PostCard;
