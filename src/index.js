/* eslint-disable import/no-extraneous-dependencies */
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/App';
import reducers from './reducers';
import randomId from './tools/randomId';

const exampleLib = [
  {
    id: randomId(),
    author: 'Homer',
    title: 'Odyssey',
    category: 'Classic literature',
    pages: '200',
    progress: '100',
  },
  {
    id: randomId(),
    author: 'Ernest Cline',
    title: 'Ready Player One',
    category: 'Sci-Fi',
    pages: '200',
    progress: '200',
  },
  {
    id: randomId(),
    author: 'Isaac Asimov',
    title: 'I, Robot',
    category: 'Sci-Fi',
    pages: '200',
    progress: '10',
  },
  {
    id: randomId(),
    author: 'David Garcia',
    title: 'Learning Python',
    category: 'Learning',
    pages: '200',
    progress: '76',
  },
];

const store = createStore(
  reducers,
  {
    books: exampleLib,
    filter: 'All',
  },
  composeWithDevTools(),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
