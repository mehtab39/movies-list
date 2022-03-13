import axios from "axios";
import {
    DATALOADING,
    DATASUCCESS,
    DATAERROR
} from "../actionTypes";

const API_KEY = "api_key=f92460e8b4e1160664337b9edd0ebf1b";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const movie_url = axios.create({
    baseURL: API_URL
});
const image_url = axios.create({
    baseURL: IMG_URL
});

export const datasuccess = data => {
    return {
        type: DATASUCCESS,
        payload: data
    }
}
export const artistsuccess = data => {
    return {
        type: ARTISTSUCCESS,
        payload: data
    }
}
export const dataerror = $ => {
    return {
        type: DATAERROR,
        
    }
}

export const dataloading = $ => {
    return {
        type: DATALOADING,
    }
}


export const fetchData = $ => async dispatch => {
    dispatch(dataloading())
    try {
        await movie_url.get()
            .then(res => {
                console.log(res.data)
                dispatch(datasuccess(res.data));
            })
    } catch (e) {
        dispatch(dataerror())
    };
}

