import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducers from './reducers/index';

const middleware = applyMiddleware(thunk, createLogger());

export default createStore(reducers, middleware);