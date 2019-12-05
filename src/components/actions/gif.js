import Axios from 'axios';
import { API_KEY } from '../constants/api'

export const FETCH_GIF_FULLFILLED = 'FETCH_GIF_FULLFILLED';
export const FETCH_GIF_FAILED = 'FETCH_GIF_FAILED'

export default function fetchSingleGif(id){
    return function(dispatch){
        Axios.get(`https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`).then((result)=>{
            const gif = result.data.data;
            dispatch({type: FETCH_GIF_FULLFILLED, payload:gif})
        }).catch((error)=>{
            dispatch({type: FETCH_GIF_FAILED, payload: error});
        })
    }
}