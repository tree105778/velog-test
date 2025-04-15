import React from 'react';
import Tabs from '../components/Layout/Tabs';
import PostList from '../components/PostCard/PostList';
import Header from '../components/Layout/Header';

function Trending() {
  return (
    <>
      <div>
        <Header />
        <Tabs />
        <PostList />
      </div>
    </>
  );
}

export default Trending;
