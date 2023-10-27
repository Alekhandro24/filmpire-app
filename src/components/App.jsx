import './App.css';
import { useEffect, useState } from 'react';
import SearchIcon from '../images/icons/search.svg';
import MovieCard from './MovieCard/MovieCard';
import api from '../services/api';

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchrTerm] = useState('');

  const searchMovies = async title => {
    const res = await api.apiSearch(title);
    setMovies(res);
  };

  useEffect(() => {
    searchMovies('Italy');
  }, []);

  return (
    <section className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for movie"
          value={searchTerm}
          onChange={e => setSearchrTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search icon"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map(movie => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </section>
  );
};
