export default function reducer(state = {
    gif : [],
    fetching: false,
    fetched: false,
    error: null
}, action){
    switch(action.type){
        case "FETCH_GIF_START": {
            return {...state, fetching: true}
        }
        case "FETCH_GIF_FULLFILLED":{
            return {...state, fetching: false, fetched: true, gif: action.payload}
        }
        case "FETCH_GIF_FAILED":{
            return {...state, fetching: false, fetched: false, gif: action.payload}
        }
        default: return state;
    }
}