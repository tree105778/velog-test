import blog_card from './blog_cards.json';
import blog_detail from './blog_details.json';

const kimsBlogPost = [
  { id: 1, title: 'test', description: 'test', tag: 'test' },
  { id: 2, title: 'test1', description: 'test1', tag: 'test1' },
  { id: 3, title: 'test3', description: 'test3', tag: 'test3' },
];

const STORAGE_KEY = 'usersBlogPost';
const PUBLIC_STORAGE = 'publicStorage';

export async function fetchUserBlogPost() {
  try {
    const storedUserPost = localStorage.getItem(STORAGE_KEY);
    return storedUserPost ? JSON.parse(storedUserPost) : kimsBlogPost;
  } catch {
    return kimsBlogPost;
  }
}

export async function addUserBlogPost({ title, description, tag }) {
  const currentData = await fetchUserBlogPost();
  const newPost = {
    id: kimsBlogPost.length + 1,
    title,
    description,
    tag,
  };
  const updatedData = [...currentData, newPost];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));

  return updatedData;
}

export async function fetchBlogCard() {
  try {
    const storedBlogCard = localStorage.getItem(PUBLIC_STORAGE);
    return storedBlogCard ? JSON.parse(storedBlogCard) : blog_card;
  } catch {
    return blog_card;
  }
}

export async function addBlogCard({
  title,
  description,
  link,
  author,
  authorLink,
  authorImageUrl,
  date,
  comments,
  likes,
  thumbnailUrl,
}) {
  await blog_card.splice(0, 0, {
    title,
    description,
    link,
    author,
    authorLink,
    authorImageUrl,
    date,
    comments,
    likes,
    thumbnailUrl,
  });

  localStorage.setItem(PUBLIC_STORAGE, JSON.stringify(blog_card));

  return blog_card;
}

export default {
  blog_card,
  blog_detail,
};
