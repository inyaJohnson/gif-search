import Axios from 'axios';

export default function GetSingleGif(){
    return function(dispatch){
        Axios.get(`http://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`).then((result)=>{
            const gifs = result.data.data;
            dispatch({type:'FETCH_GIFS_FULLFILLED', payload:gifs})
        }).catch((error)=>{
            dispatch({type: "FETCH_GIFS_FAILED", payload: error});
        })
    }
}