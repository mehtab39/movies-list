import axios from "axios";
import { getLocalStorage, pushLocalStorage } from "../../utils/localStorage";
import {
    DATALOADING,
    DATASUCCESS,
    DATAERROR,
    DATAREMOVE
} from "../actionTypes";

const API_KEY = "api_key=f92460e8b4e1160664337b9edd0ebf1b";
const BASE_URL = "https://api.themoviedb.org/3";
export const IMG_URL = "https://image.tmdb.org/t/p/w500";
export const datasuccess = data => {
    return {
        type: DATASUCCESS,
        payload: data
    }
}
export const dataremove = data => {
    return {
        type: DATAREMOVE,
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


export const fetchData = page => async dispatch => {
    dispatch(dataloading())
    const PAGE = page || 1;
    const API_URL = BASE_URL + `/discover/movie?page=${PAGE}&` + API_KEY;
    try {
        await axios.get(API_URL)
            .then(res => {
                dispatch(datasuccess(res.data.results));
            })
    } catch (e) {
        dispatch(dataerror())
    };
}


export const addToWishlist = data => dispatch => {
    data.map(el=> pushLocalStorage("movies", el))
}
export const removeFromData = (data) => dispatch => {
    const ids = [];
    data.map(el=> ids.push(el.id))
    dispatch(dataremove(ids))
}

export const getFavorites = fn => dispatch => {
     const data = getLocalStorage("movies");
     fn(data)
}


