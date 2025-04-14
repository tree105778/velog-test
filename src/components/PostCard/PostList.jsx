import React from 'react';
import dummyPosts from './dummyPosts';
import PostCard from './PostCard';

const PostList = () => {
  return (
    <ul
      style={{
        padding: '1rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '1.5rem',
      }}
    >
      {dummyPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
