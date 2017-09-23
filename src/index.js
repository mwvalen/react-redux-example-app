import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import store from './store';
import Home from './components/Home';
import Login from './components/Login';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';

ReactDOM.render((
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="login" component={Login} />
    </Route>
  </Router>

  </Provider>
), document.getElementById('root'));
