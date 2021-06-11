import React from 'react';
import translate from './i18n/translate';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

const routes = [
  { path: '/', exact: true, name: translate('home') },
  { path: '/dashboard', name: translate('dashboard'), component: Dashboard },
];

export default routes;
