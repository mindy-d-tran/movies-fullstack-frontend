import { useEffect, useState } from "react";
import "./App.css";

function App() {
  /**useEffect
   * 1st param = callback function
   * 2nd param = array of dependecies (optional) will use it 99.99% of time
   */
  useEffect(() => {
    //connect to backend
    const fetchData = async () => {
      console.log("fetching data...");
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Movies Full stack app</h1>
    </div>
  );
}

export default App;
