import { routes } from './routes.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { AppHeader } from './cmps/AppHeader.jsx'
import { Footer } from './cmps/AppFooter'
import { Home } from './pages/Home.jsx'
import { StaySearch } from './pages/StaySearch.jsx'


import './assets/scss/main.scss'

export function RootCmp() {
  return (
    <div className="App">
      <Router>
        <AppHeader />
        <main>
          <Switch>
            {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
          </Switch>
        </main>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}
