import { Home } from './pages/Home.jsx';
import { StayDetails } from './pages/StayDetails';
import { StaySearch } from './pages/StaySearch';
import {BecomeHost}  from './pages/BecomeHost.jsx';
export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/StaySearch',
    component: StaySearch,
  },
  {
    path: '/stay/:stayId',
    component: StayDetails,
  },
  {
    path: '/BecomeHost',
    component: BecomeHost,
  }
];
