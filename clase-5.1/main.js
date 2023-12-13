import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './style.css'
import Form from './src/components/form'
import ProductList from './src/components/product_list'

document.querySelector('#app').innerHTML = `
  ${Form()}
  ${ProductList()}
`

