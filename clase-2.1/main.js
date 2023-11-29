import './style.css'
import NavBar from './src/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// const Menu = require('./menu.js')

document.querySelector('#app').innerHTML = `
  ${NavBar()}
`