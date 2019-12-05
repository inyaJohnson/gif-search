import {combineReducers} from 'redux';
import gifs from './gifs';
import gif from './gif'


const reducers = combineReducers({
    gifs,
    gif
})

export default reducers;