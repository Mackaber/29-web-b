import './style.css'
import Menu from './menu.js'
// const Menu = require('./menu.js')

document.querySelector('#app').innerHTML = `
  <h1>Hola mundo</h1>
  ${Menu("/", "/about", "/contact")}
`

const busqueda_input = document.getElementById("busqueda_input");
const busqueda_btn = document.getElementById("busqueda_btn");

busqueda_btn.addEventListener("click", (event) => {
  console.log(busqueda_input.value)
})