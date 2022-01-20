import { Home } from './pages/Home.jsx';
import { StayDetails } from './pages/StayDetails';
import { StaySearch } from './pages/StaySearch';

export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/stay/:stayId',
    component: StayDetails,
  },
  {
    path: '/StaySearch',
    component: StaySearch,
  },
];
