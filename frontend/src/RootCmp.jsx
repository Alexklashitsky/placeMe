import { routes } from './routes.js'
import { Switch, Route } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

import { AppHeader } from './cmps/AppHeader.jsx'
import { Footer } from './cmps/AppFooter'


import '../assets/css/main.scss'

export function App() {
  return (
    <div className="App">
      <Router>
        <AppHeader />
        <main>
        <Switch>
          {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
        </Switch>
        </main>  
        <Footer />
      </Router>
    </div>
  );
}
