import { useState, useEffect, useRef } from "react";
import MovieList from "../components/MovieList";

function Home() {
    const [movies, SetMovies] = useState([])
    const [loading, SetLoading] = useState(false)
    const inputRef = useRef();

    const fetchMovies = async (query) => {
        SetLoading(true)
        const result = await fetch(`http://www.omdbapi.com/?apikey=11238ccb&s=${query}`)
        const data = await result.json();
        console.log(data);
        SetMovies(data.Search || [])
        SetLoading(false)
    }

    useEffect(() => {
        fetchMovies("Avengers")
    }, [])

    const handleSearch = (e) => {
        e.preventDefault();
        const query = inputRef.current.value.trim();
        if(query) fetchMovies(query)
    }

  return (
    <div className="home">
      <form onSubmit={handleSearch}>
        <input ref={inputRef} className="searchInput" placeholder="Search for a movie..." />
        <button type="submit">Search 🔎</button>
      </form>
      {loading ? <p>Loading...</p> : <MovieList movies={movies} />}
    </div>
  );
}

export default Home;
