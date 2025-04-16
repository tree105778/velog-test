// import data from '../../data/data'; // 경로는 네 위치에 맞게 조정
import PostCard from './PostCard';
import styles from './PostList.module.css';
import { useLoaderData } from 'react-router-dom';

const PostList = () => {
  const blogCard = useLoaderData();
  return (
    <ul className={styles.list}>
      {blogCard.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
      {/*{data.blog_card.map((post, index) => (*/}
      {/*  <PostCard key={index} post={post} />*/}
      {/*))}*/}
    </ul>
  );
};

export default PostList;
