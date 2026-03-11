import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovie() {
      const result = await fetch(
        `http://www.omdbapi.com/?apikey=11238ccb&i=${id}`
      );
      const data = await result.json();
      setMovie(data);
      console.log(data);
    }

    getMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-detail">
  <img src={movie.Poster} alt={movie.Title} />

  <div className="movie-info">
    <h2>{movie.Title} ({movie.Year})</h2>

    <p><strong>Genre:</strong> {movie.Genre}</p>
    <p><strong>Runtime:</strong> {movie.Runtime}</p>
    <p><strong>Released:</strong> {movie.Released}</p>
    <p><strong>Director:</strong> {movie.Director}</p>
    <p><strong>Actors:</strong> {movie.Actors}</p>
    <p><strong>Language:</strong> {movie.Language}</p>
    <p><strong>Country:</strong> {movie.Country}</p>

    <p className="rating">IMDb: ⭐ {movie.imdbRating}</p>

    <p><strong>Plot:</strong> {movie.Plot}</p>
  </div>
</div>
  );
}

export default MovieDetail;