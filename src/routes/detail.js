import { useEffect, useState } from "react";
import {useParams, useSearchParams} from "react-router-dom";
function Detail(){
    const {id}=useParams();
    const [movie, SetMovie]=useState([]);
    const getMovie = async () => {
        const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        SetMovie(json.data.movie);
    }
    useEffect(()=>{
        getMovie();
    }, []);
    return <div>
        <img src={movie.background_image} alt={movie.id}></img>
        <h1>{movie.title}</h1>
        <h2>Desciprtion</h2>
        <h5>{movie.description_full}</h5>
    </div>
}
export default Detail;
