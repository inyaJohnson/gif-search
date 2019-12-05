import { FETCH_GIFS_FULLFILLED, FETCH_GIFS_FAILED } from '../actions/gifs'

const initialState = {
    gifs : [],
    fetching: false,
    fetched: false,
    error: null
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case "FETCH_GIFS_START": {
            return {
                ...state, fetching: true
            }
        }
        case FETCH_GIFS_FULLFILLED: {
             return {
                 ...state, 
                 fetching: false, 
                 fetched: true, 
                 gifs: action.payload
                }
        }
        case FETCH_GIFS_FAILED: {
            return {
                ...state, 
                fetching: false, 
                fetched: false, 
                gifs: action.payload
            }
        }
        default : return state;
    }
    
}