import Axios from 'axios';

export const FETCH_GIFS_FULLFILLED = 'FETCH_GIFS_FULLFILLED'
export const FETCH_GIFS_FAILED = 'FETCH_GIFS_FAILED'

export default function GetGif(){
    return function(dispatch){
        Axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${this.state.search}`).then((result)=>{
            const gifs = result.data.data;
            dispatch({type:'FETCH_GIFS_FULLFILLED', payload:gifs})
        }).catch((error)=>{
            dispatch({type: "FETCH_GIFS_FAILED", payload: error});
        })
    }
}