import './style.css'
import NavBar from './src/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import MovieCard from './src/moviecard'
// const Menu = require('./menu.js')

document.querySelector('#app').innerHTML = `
  ${NavBar()}
  <div class="container">
    ${MovieCard("https://m.media-amazon.com/images/M/MV5BZDcwMzU4NWYtODIzZi00Yzg4LWJhOTAtOTQ2ZDA4NmFlYmFlXkEyXkFqcGdeQXVyMTY1MTU3NDY5._V1_SX300.jpg", "The Flash", "After being struck by lightning, Barry Allen wakes up from his coma to discover he's been given the power of super speed, becoming the Flash, and fighting crime in Central City.")}
    ${MovieCard("https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg", "Thor", "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.")}
  </div>
`