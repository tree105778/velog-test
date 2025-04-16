// import data from '../../data/data';
import PostCard from './PostCard';
import styles from './PostList.module.css';
import { useLoaderData } from 'react-router-dom';

const parseDate = (dateString) => {
  const now = new Date();
  const cleanStr = dateString.replace(/^약\s*/, '').trim(); // "약 " 제거

  if (cleanStr === '어제') {
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    return yesterday;
  }

  if (cleanStr.includes('일 전')) {
    const daysAgo = parseInt(cleanStr.replace('일 전', '').trim(), 10);
    return new Date(now.getTime() - daysAgo * 24 * 60 * 60 * 1000);
  }

  if (cleanStr.includes('시간 전')) {
    const hoursAgo = parseInt(cleanStr.replace('시간 전', '').trim(), 10);
    return new Date(now.getTime() - hoursAgo * 60 * 60 * 1000);
  }

  if (cleanStr.includes('분 전')) {
    const minutesAgo = parseInt(cleanStr.replace('분 전', '').trim(), 10);
    return new Date(now.getTime() - minutesAgo * 60 * 1000);
  }

  if (cleanStr.includes('초 전')) {
    const secondsAgo = parseInt(cleanStr.replace('초 전', '').trim(), 10);
    return new Date(now.getTime() - secondsAgo * 1000);
  }

  if (cleanStr.includes('방금 전')) {
    return now;
  }

  const match = cleanStr.match(/(\d{4})년\s*(\d{1,2})월\s*(\d{1,2})일/);
  if (match) {
    const [, year, month, day] = match;
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  }

  return new Date(cleanStr);
};

const RecentList = () => {
  const blogCard = useLoaderData();
  const sortedData = [...blogCard].sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB - dateA;
  });
  // const sortedData = [...data.blog_card].sort((a, b) => {
  //   const dateA = parseDate(a.date);
  //   const dateB = parseDate(b.date);
  //   return dateB - dateA;
  // });

  return (
    <ul className={styles.list}>
      {sortedData.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </ul>
  );
};

export default RecentList;
