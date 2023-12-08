import axios from 'axios';

function Form() {

  document.addEventListener('DOMContentLoaded', (event) => {
    const product_form = document.getElementById("product_form");

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
        url: 'https://crudcrud.com/api/a5b586295151488ab0d8328dc5729388/products',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };

      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
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