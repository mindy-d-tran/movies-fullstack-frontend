import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

//context
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";

import MainPage from "./pages/MainPage";

import NavBar from "./components/NavBar";
import MovieDetail from "./components/MovieDetails";
import MoviesList from "./components/MoviesList";

function App() {
  const [movies, setMovies] = useState([]);
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState({});

  /**useEffect
   * 1st param = callback function
   * 2nd param = array of dependecies (optional) will use it 99.99% of time
   */
  useEffect(() => {
    //connect to backend
    const fetchData = async () => {
      const res = await fetch("http://localhost:4000/api/movies");
      const data = await res.json();
      console.log(data);
      //set the data to the state movies var
      setMovies(data);
    };
    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className="App">
          <h1>Movies Full stack app</h1>

          {user ? (
            <>
              <NavBar />
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route
                  path="/movies"
                  element={<MoviesList movies={movies} />}
                />
                <Route path="/movies/:id" element={<MovieDetail />} />
              </Routes>
            </>
          ) : (
            <MainPage />
          )}
          
        </div>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
