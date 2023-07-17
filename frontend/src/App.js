import './App.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {React, createContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './Components/Search/Search';

export const MovieContext = createContext();



function App() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/movies')
      .then((res) => res.json())
      .then(data => {
        setMovies(data)
      })
      .catch(error=>console.log("Not Working"))
  },[])


  return (
  <>
    <div className="App" id='header'>
      <h1 className='HeaderTitle' id='header-title' onClick={() => navigate('/')}>Movies</h1>
    </div>

    <MovieContext.Provider value={{movies, setMovies}}>
    <Router>
      <Routes>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </Router>
    </MovieContext.Provider>
  </>
  );
}

export default App;
