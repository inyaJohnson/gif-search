// import {FETCH_GIFS_FULLFILLED}

export default function reducer(state = {
    gifs : [],
    fetching: false,
    fetched: false,
    error: null
}, action){
    switch(action.type){
        case "FETCH_GIFS_START": {
            return {...state, fetching: true}
        }
        case "FETCH_GIFS_FULLFILLED":{
             return {...state, fetching: false, fetched: true, gifs: action.payload}
        }
        case "FETCH_GIFS_FAILED":{
            return {...state, fetching: false, fetched: false, gifs: action.payload}
        }
        default : return state;
    }
    
}