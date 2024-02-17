import { createBrowserRouter } from 'react-router-dom';

import Homepage from '../pages/Homepage';
import Login from '../pages/login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Homepage />,
  },
]);
