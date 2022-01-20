import { Home } from './pages/Home.jsx';
import { StayDetails } from './pages/StayDetails';
import { StaySearch } from './pages/StaySearch';

export const routes = [
  {
    path: '/stay/',
    component: StayDetails,
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '/StaySearch',
    component: StaySearch,
  },

];
