const axios = require('axios');

let product = {
  name: "Librero de Madera",
  image: "https://cdn1.coppel.com/images/catalog/pm/3003223-1.jpg",
  price: "100"
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
