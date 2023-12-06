import './style.css'
import NavBar from './src/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import MovieCard from './src/moviecard'
import { MOVIES } from './src/constants'
// const Menu = require('./menu.js')

document.querySelector('#app').innerHTML = `
  ${NavBar()}
  <div class="container">
    ${
      MOVIES.map((movie) => 
        MovieCard(movie)
      ).join("\n")
    }
  </div>
`