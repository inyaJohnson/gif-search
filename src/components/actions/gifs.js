import Axios from 'axios';
import { API_KEY } from '../constants/api'

export const FETCH_GIFS_FULLFILLED = 'FETCH_GIFS_FULLFILLED'
export const FETCH_GIFS_FAILED = 'FETCH_GIFS_FAILED'

export default function fetchGifs(searchWord){
    return function(dispatch){
        Axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchWord}`).then((result)=>{
            const gifs = result.data.data;
            dispatch({ 
                type: FETCH_GIFS_FULLFILLED, 
                payload: gifs
            })
        }).catch((error)=>{
            dispatch({
                type: FETCH_GIFS_FAILED, 
                payload: error
            });
        })
    }
}