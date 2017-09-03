import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import todoApp from './reducer.js';

let store = createStore(todoApp);
let rootElement=document.getElementById('app');

ReactDom.render(<Provider store={store} ><App /></Provider>,rootElement);
