import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configStore';
import { Provider } from 'react-redux';

import { loadCourses } from './actions/courseActions';

//Nessa função eu poderia passar um state incial para minha aplicação.
const store = configureStore();
store.dispatch(loadCourses()); //Fazendo a chamada para carregar meus cursos na store quando incial a aplicação.

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('app')
);
