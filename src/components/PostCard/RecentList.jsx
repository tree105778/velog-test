import data from '../../data/data';
import PostCard from './PostCard';
import styles from './PostList.module.css';

const parseDate = (dateString) => {
  if (dateString.includes('일 전')) {
    const daysAgo = parseInt(dateString.replace('일 전', '').trim(), 10);
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date;
  }
  const normalized = dateString
    .replace('년', '-')
    .replace('월', '-')
    .replace('일', '')
    .replace(/\s+/g, '');
  return new Date(normalized);
};

const RecentList = () => {
  const sortedData = [...data.blog_card].sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB - dateA;
  });

  return (
    <ul className={styles.list}>
      {sortedData.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </ul>
  );
};

export default RecentList;
