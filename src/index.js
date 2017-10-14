import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import store from './store';
import Article from './components/Article';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Settings from './components/Settings';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';

ReactDOM.render((
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="login" component={Login} />
    <Route path="register" component={Register} />
    <Route path="settings" component={Settings} />
    <Route path="article/:id" component={Article} />
    </Route>
  </Router>

  </Provider>
), document.getElementById('root'));
