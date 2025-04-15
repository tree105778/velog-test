import data from '../../data/data'; // 경로는 네 위치에 맞게 조정
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
      {data.blog_card.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
