import { useEffect, useState } from "react";
import "./App.css";
import MoviesList from "./components/MoviesList";

function App() {

  const [movies, setMovies] = useState([])
  /**useEffect
   * 1st param = callback function
   * 2nd param = array of dependecies (optional) will use it 99.99% of time
   */
  useEffect(() => {
    //connect to backend
    const fetchData = async () => {
      const res = await fetch('http://localhost:4000/api/movies');
      const data = await res.json();
      console.log(data);
      //set the data to the state movies var
      setMovies(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Movies Full stack app</h1>
      <MoviesList movies={movies}/>
    </div>
  );
}

export default App;
