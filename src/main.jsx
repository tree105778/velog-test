import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App, { loader as rootLoader } from './App.jsx';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from './components/RootLayout.jsx';
import Trending from './pages/Trending.jsx';
import Recent from './pages/Recent.jsx';
import UserPosts from './pages/UserPosts.jsx';
import PostWrite from './pages/PostWrite.jsx';
import MyVelog from './pages/MyVelog.jsx';
import MyVelogPosts from './pages/MyVelogPosts.jsx';
import MyVelogSeries from './pages/MyVelogSeries.jsx';
import MyVelogAbout from './pages/MyVelogAbout.jsx';
import Feed from './pages/Feed.jsx';
import {
  addBlogCard,
  addUserBlogPost,
  fetchBlogCard,
  fetchUserBlogPost,
} from './data/data.js';

const routes = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          loader: rootLoader,
          element: <App />,
        },
        {
          path: '/trending',
          loader: async () => {
            return await fetchBlogCard();
          },
          element: <Trending />,
        },
        {
          path: '/recent',
          loader: async () => {
            return await fetchBlogCard();
          },
          element: <Recent />,
        },
        {
          path: '/feed',
          element: <Feed />,
        },
      ],
    },
    {
      path: '/:userName/',
      element: <UserPosts />,
      children: [
        {
          index: true,
          loader: async () => redirect('/posts'),
        },
        {
          path: 'posts',
          loader: async () => {
            return await fetchUserBlogPost();
          },
          element: <MyVelogPosts />,
        },
        {
          path: 'series',
          element: <MyVelogSeries />,
        },
        {
          path: 'about',
          element: <MyVelogAbout />,
        },
      ],
    },
    {
      path: '/write',
      action: async ({ request }) => {
        const {
          title,
          tags,
          link,
          description,
          thumbnailUrl,
          likes,
          comments,
          author,
          date,
          authorLink,
          authorImageUrl,
          isPublicPost,
        } = await request.json();
        if (isPublicPost) {
          await addBlogCard({
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
        }
        await addUserBlogPost({ title, description, tag: tags });
        if (!isPublicPost) return redirect(authorLink);
        return redirect('/');
      },
      element: <PostWrite />,
    },
    { path: '/myvelog', element: <MyVelog /> },
  ],
  {
    basename: `/velog-test`,
  },
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
);
