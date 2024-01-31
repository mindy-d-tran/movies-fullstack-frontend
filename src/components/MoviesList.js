import MovieItem from "./MovieItem";

function MoviesList({ movies }) {
  return (
    <div>
      <h2>Movie List</h2>
      <section>
        {movies.length ? (
          movies.map((movie) => <MovieItem key={movie._id} movie={movie} />)
        ) : (
          <h2>Loading movies</h2>
        )}
      </section>
    </div>
  );
}

export default MoviesList;
