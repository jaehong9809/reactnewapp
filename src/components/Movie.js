import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ id, medium_cover_image, title, summary, genres }) {
  return (
    <div style={{border:"10px solid #00FFFF", borderRadius:"30px", margin:"30px"}}>
      <img src={medium_cover_image} alt={title}></img>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre, index) => (
          <li key={index} >{genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
