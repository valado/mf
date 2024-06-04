import { lazy } from 'react';
import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { AppMainBar } from './components/AppMainBar';
import MainContentWrapper from './infra/MainContentWrapper';
import { routes } from './routes';
const Presentation = lazy(
  () => import('./presentation/components/Presentation')
);
const Home = lazy(() => import('./components/Home'));
const Config = lazy(() => import('./components/Config'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppLayout>
        <AppMainBar />
        <Outlet />
      </AppLayout>
    ),
    children: [
      {
        path: '/',
        element: <Navigate to="/home" />,
        errorElement: <div>Error</div>,
      },
      {
        path: routes.home.path,
        element: <Home />,
      },
      {
        path: routes.config.path,
        element: <Config />,
      },
      {
        path: routes.presentation.path,
        element: <Navigate to={`${routes.presentation.path}/webpack-shell`} />,
      },
      {
        path: `${routes.presentation.path}/:slideId`,
        element: <Presentation />,
      },
      {
        path: routes.app.path,
        element: <MainContentWrapper />,
      },
      {
        path: '*',
        element: <span>404 Not Found</span>,
      },
    ],
  },
]);

export const Routing = () => <RouterProvider router={router} />;
