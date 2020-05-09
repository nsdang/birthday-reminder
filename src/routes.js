/* eslint-disable react/no-multi-comp */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import DashboardLayout from './layouts/Dashboard';

export default [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/home" />
  },
  {
    route: '*',
    component: DashboardLayout,
    routes: [
      {
        path: '/home',
        exact: true,
        component: lazy(() => import('src/views/HomePage'))
      }
    ]
  }
];
