import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import BackTestPage from 'src/views/back-test/BackTestPage';
import DynamicBackTestPage from 'src/views/dynamic-back-test/DynamicBackTestPage';
import IntroducePage from 'src/views/introduce/IntroducePage';
import MainPage from 'src/views/main/MainPage';
import MyStrategyPage from 'src/views/my-strategy/MyStrategyPage';
import StaticBackTestPage from 'src/views/static-back-test/StaticBackTestPage';
import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));

/* ****Pages***** */
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/introduce', element: <IntroducePage /> },
      { path: '/static-back-test', element: <StaticBackTestPage /> },
      { path: '/static-back-test/:id', element: <StaticBackTestPage /> },
      { path: '/dynamic-back-test', element: <DynamicBackTestPage /> },
      { path: '/dynamic-back-test/:id', element: <DynamicBackTestPage /> },
      { path: '/my-strategy', element: <MyStrategyPage /> },
      { path: '/back-test', element: <BackTestPage /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <FullLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/login', element: <Login /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
