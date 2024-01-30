import MovieItem from "./MovieItem";

function MoviesList({ movies }) {
  return (
    <div>
      <h2>Movie List</h2>
      <section>
        {movies && movies.map((movie) => <MovieItem key={movie._id} movie={movie}/>)}
      </section>
    </div>
  );
}

export default MoviesList;
