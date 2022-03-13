import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getFavorites, IMG_URL } from "../../redux/action/dataAction";
import { uniqueObject } from "../../utils/uniqueObjects";
import "./Favorites.css"

export const Favorites = $ =>{
    const dispatch = useDispatch()
    const [favorites, setFavorites] = useState([])
    useEffect(() =>{
            dispatch(getFavorites(setFavorites))
    }, [dispatch])

   
    
    return favorites?.length ? <main>
        {uniqueObject(favorites)?.map(movie=>{
         const { title, poster_path, vote_average, overview } = movie;
         return <div className="movie">
          <img id="mainimg" src={IMG_URL + poster_path} alt={title}/>
        <div class="movie-info">
          <h3>{title}</h3>
          <span>{vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          {overview}
        </div>
         </div>
        })}
    </main> : <p>Nothing to show</p>
}
