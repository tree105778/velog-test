import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout.jsx';
import Trending from './pages/Trending.jsx';
import Recent from './pages/Recent.jsx';
import UserPosts from './pages/UserPosts.jsx';
import PostWrite from './pages/PostWrite.jsx';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: '/trending',
        element: <Trending />,
      },
      {
        path: '/recent',
        element: <Recent />
      },
      {
        path: '/:userName/posts',
        element: <UserPosts />
      },
    ],
  },
  {
    path: '/write',
    element: <PostWrite />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
);
