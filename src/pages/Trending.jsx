import React from 'react';
import Tabs from '../components/Layout/Tabs';
import PostList from '../components/PostCard/PostList';

function Trending() {
  return (
    <>
      <div>
        <Tabs />
        <PostList />
      </div>
    </>
  );
}

export default Trending;
