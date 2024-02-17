import { createBrowserRouter } from 'react-router-dom';

import Homepage from '../pages/Homepage';
import Login from '../pages/login';
import Signup from '../pages/signup';

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
    element: <Signup />,
  },
]);
