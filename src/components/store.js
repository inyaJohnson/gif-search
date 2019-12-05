import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import Reducers from './reducers/index';

const Middleware = applyMiddleware(thunk, createLogger());

export default createStore(Reducers, Middleware);