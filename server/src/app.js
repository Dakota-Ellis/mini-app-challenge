const express = require('express');
const app = express();
const port = 3001;
app.use(express.json());
var cors = require('cors');
app.use(cors())

const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
]

app.get('/', (req, res) => res.send('hello World'))

app.get('/movies', (req, res) => {
    res.send(movies)

})

app.get('/movies/movie', (req, res) => {
  indMovie = []
  movies.map(movie => {
    indMovie.push(movie.title)
  })
  res.send(indMovie)
})
app.listen(port, () => console.log(`Listening at ${port}`))