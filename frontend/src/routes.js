import { Home } from './pages/Home.jsx';
import { StayDetails } from './pages/StayDetails';

export const routes = [
  {
    path: '/stay/',
    component: StayDetails,
  },
  {
    path: '/',
    component: Home,
  },
];
