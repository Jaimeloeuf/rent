import { createBrowserRouter } from 'react-router-dom';

import { Home } from './views/Home/Home';
import { Post } from './views/Post/Post';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/post/:postID',
    element: <Post />,
  },
]);
