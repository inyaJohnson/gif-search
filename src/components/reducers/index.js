import {combineReducers} from 'redux';
import Gif from './Gif';
import SingleGif from './SingleGif'


const Reducers = combineReducers({
    Gif,
    SingleGif
})

export default Reducers;