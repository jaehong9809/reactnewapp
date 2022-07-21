import { useEffect, useState } from "react";
import Movie from "C:/Users/Good/Documents/practicemovie/src/components/Movie.js";

function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
      const json = await (
        await fetch(
          `https://yts.mx/api/v2/list_movies.jsonminimum_rating=8.8&sort_by=year`
        )
      ).json();
      setMovies(json.data.movies);
      setLoading(false);
    };
    useEffect(() => {
      getMovies();
    }, []);

    return (
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : 
          <div >
            {movies.map((item) => 
              
              <Movie id={item.id} medium_cover_image={item.medium_cover_image} title={item.title} summary={item.summary} genres={item.genres}/>
            )}
          </div>
        }
      </div>
    );
}
export default Home;