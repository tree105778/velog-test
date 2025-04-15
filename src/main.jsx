import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App, { loader as rootLoader } from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout.jsx';
import Trending from './pages/Trending.jsx';
import Recent from './pages/Recent.jsx';
import UserPosts from './pages/UserPosts.jsx';
import PostWrite from './pages/PostWrite.jsx';
import MyVelog from './pages/MyVelog.jsx';

const routes = createBrowserRouter([
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
        element: <Trending />,
      },
      {
        path: '/recent',
        element: <Recent />,
      },
      {
        path: '/:userName/posts',
        element: <UserPosts />,
      },
    ],
  },
  {
    path: '/write',
    element: <PostWrite />,
  },
  { path: '/myvelog', element: <MyVelog /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
);
