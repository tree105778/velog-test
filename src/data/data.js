import blog_card from './blog_cards.json';
import blog_detail from './blog_details.json';

const kimsBlogPost = [
  { id: 1, title: 'test', description: 'test', tag: 'test' },
  { id: 2, title: 'test1', description: 'test1', tag: 'test1' },
  { id: 3, title: 'test3', description: 'test3', tag: 'test3' },
];

export async function fetchUserBlogPost() {
  return kimsBlogPost;
}

export async function addUserBlogPost({ title, description, tag }) {
  await kimsBlogPost.push({
    id: kimsBlogPost.length + 1,
    title,
    description,
    tag,
  });

  return kimsBlogPost;
}

export async function fetchBlogCard() {
  return blog_card;
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

  return blog_card;
}

export default {
  blog_card,
  blog_detail,
};
