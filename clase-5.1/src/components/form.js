import axios from 'axios';
import { get_all_products } from '../services/products';
import Product from './product';

function Form() {

  document.addEventListener('DOMContentLoaded', (event) => {
    const product_form = document.getElementById("product_form");

    // Cuando se agrega un producto
    product_form.addEventListener("submit", (event) => {
      event.preventDefault()
      console.log(event.target.name.value)
      let product = {
        name: event.target.name.value,
        image: event.target.image.value,
        price: event.target.price.value
      }

      let data = JSON.stringify(product);

      let config = {
        method: 'post',
        url: 'https://devf29webb-fc70.restdb.io/rest/products',
        headers: { 
          'x-apikey': '65790996993e5fb439d25219', 
          'Content-Type': 'application/json'
        },
        data : data
      };

      axios.request(config)
      .then(async (response) => {
        const products = await get_all_products()
        document.querySelector('#product_list').innerHTML = products.map((product_obj) => Product(product_obj)).join("")
      })
      .catch((error) => {
        console.log(error);
      });  
      
    })
  })

  return `
  <form id="product_form">
    <input type="text" name="name"  placeholder="name"/>
    <input type="text" name="image" placeholder="image"/>
    <input type="text" name="price" placeholder="price"/>
    <input type="submit" value="Enviar"/>
  </form>
  `
}

export default Form