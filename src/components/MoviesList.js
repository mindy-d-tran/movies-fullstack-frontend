import MovieItem from "./MovieItem";
import Spinner from "react-bootstrap/Spinner";

function MoviesList({ movies }) {
  return (
    <div>
      <h2>Movie List</h2>
      <section>
        {movies.length ? (
          movies.map((movie) => <MovieItem key={movie._id} movie={movie} />)
        ) : (
          <Spinner animation="border"/>
        )}
      </section>
    </div>
  );
}

export default MoviesList;
