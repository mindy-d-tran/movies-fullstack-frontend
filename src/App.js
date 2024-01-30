import { useEffect, useState } from "react";
import "./App.css";
// import MoviesList from "./components/MoviesList";
import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";

function App() {
  const [movies, setMovies] = useState(null);

  const apiKey = "c5a9bddf";
  const url = `http://www.omdbapi.com/?apikey=${apiKey}`;

  const getMovie = async (searchTerm) => {
    //make fetch response and store response
    const res = await fetch(`${url}&t=${searchTerm}`);
    //Parsing JSON res into JS obj
    const data = await res.json();
    console.log(data);
    // setting Movie state to recieved data
    setMovies(data);
  };
  /**useEffect
   * 1st param = callback function
   * 2nd param = array of dependecies (optional) will use it 99.99% of time
   */
  // useEffect(() => {
  //   //connect to backend
  //   const fetchData = async () => {
  //     const res = await fetch("http://localhost:4000/api/movies");
  //     const data = await res.json();
  //     console.log(data);
  //     //set the data to the state movies var
  //     setMovies(data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="App">
      {/* <h1>Movies Full stack app</h1>
      <MoviesList movies={movies}/> */}
      <Form moviesearch={getMovie}/>
      <MovieDisplay />
    </div>
  );
}

export default App;
