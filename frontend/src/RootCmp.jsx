import { routes } from './routes.js';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './cmps/ScrollToTop';
import { AppHeader } from './cmps/AppHeader.jsx';
import { AppFooter } from './cmps/AppFooter';

import './assets/scss/main.scss';

export function RootCmp() {
  return (
    <div className='App main-root'>
      <Router>
        <ScrollToTop>
          <AppHeader />
          {/* <main> */}
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} exact component={route.component} path={route.path} />
            ))}
          </Switch>
          {/* </main> */}
          <AppFooter />
        </ScrollToTop>
      </Router>
    </div>
  );
}
