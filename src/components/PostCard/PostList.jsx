import React from 'react';
import PostCard from './PostCard';
import dummyPosts from '../../data/data';
import styles from './PostList.module.css';

const PostList = () => {
  return (
    <ul className={styles.list}>
      {dummyPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
