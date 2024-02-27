import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/views/Home.tsx';

import Analysis from '@/views/dashboard/analysis';
import Workbench from '@/views/dashboard/workbench';

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Layout />,
    children: [
      {
        path: 'analysis',
        element: <Analysis />,
      },
      {
        path: 'workbench',
        element: <Workbench />,
      },
    ],
  },
]);
