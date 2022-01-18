import { Home } from './pages/Home.jsx'
import { ToyDetails } from './pages/ToyDetails'
import { ToyEdit } from './pages/ToyEdit'
import { About } from './pages/About'

export const routes = [
   {
      path: '/',
      component: Home
   },
   {
      path: '/about',
      component: About,
   },
   {
      path: '/toy/:toyId',
      component: ToyDetails
   },
   {
      path: '/edit/:toyId',
      component: ToyEdit
   },
]

