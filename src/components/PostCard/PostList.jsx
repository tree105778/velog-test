import data from '../../data/data'; // 경로는 네 위치에 맞게 조정
import PostCard from './PostCard';
import styles from './PostList.module.css';

const PostList = () => {
  return (
    <ul className={styles.list}>
      {data.blog_card.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
