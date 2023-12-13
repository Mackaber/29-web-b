import Product from './product'

function ProductList() {

  return `
  <h1>Product List</h1>
  <div class="grid row">
    ${Product({ name: "Mesa", image: "https://placehold.co/600x400", price: "200" })}
    ${Product({ name: "Silla", image: "https://placehold.co/600x400", price: "150" })}
  </div>
  `
}

export default ProductList