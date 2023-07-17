import './App.css';
import React, { useState, useEffect } from 'react';




function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/movies')
      .then((res) => res.json())
      .then(data => {
        setMovies(data)
      })
      .catch(error=>console.log("Not Working"))


  })


  return (
  <>
    <div className="App">
    <body>
        <h1>
          Movies to Display
        </h1> 
         
           { movies.map(movie => <li> {movie.title}</li>) } 
        
      </body>
    </div>
  </>
  );
}

export default App;
