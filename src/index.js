import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import './assets/react-toolbox/theme.css';
import './assets/css/main.css';

import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/RootReducer';

const initialState = window.__PRELOADED_STATE__;
const store = createStore(rootReducer, initialState,applyMiddleware(thunk));

ReactDOM.render(
	<Root store={store} />,
	document.getElementById('root')
);
