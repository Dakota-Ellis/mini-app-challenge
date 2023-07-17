import './App.css';

const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
]


function App() {
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
