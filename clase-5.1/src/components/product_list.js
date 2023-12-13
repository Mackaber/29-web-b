import Product from './product'
import { get_all_products } from '../services/products'

function ProductList() {

  // Cuando se carga la página
  document.addEventListener('DOMContentLoaded', async (event) => { 
    const products = await get_all_products()
    document.querySelector('#product_list').innerHTML = products.map((product_obj) => Product(product_obj)).join("")
  })

  return `
  <h1>Product List</h1>
  <div id="product_list" class="grid row">
  </div>
  `
}

export default ProductList