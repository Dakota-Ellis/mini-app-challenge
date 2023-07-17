import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MovieContext } from '../App';

function Search() {
    const { movies, setMovies } = useContext(MovieContext);
    const { userSearch, setUserSearch } = useState('');
    const navigate = useNavigate();


async function searchMovie(movie) {
    await fetch(`https:localhost3001/movies/${movie}`)
    .then(response => {if (response.ok) {return response.json()}else{throw new Error('Movie not found')}})
    .then(data => setMovie(data))
    .catch(navigate('/'))
 }

return (
    <div className='searchPage'>
        <h1 id='title'>Results</h1>
        <input type='text' placeholder='Search Movie' value={userSearch} id='searchBar' onChange={(e) => setUserSearch(e.target.value)} />
        <div className='mainPageButtons'>
            <button type='button' id='search' onClick={async () => {await searchMovie(userSearch); setUserSearch('')}}>Search</button>
        </div>
    </div>
)


}

export default Search