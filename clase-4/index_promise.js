const axios = require('axios');

const promise = axios.get('https://pokeapi.co/api/v2/pokemon/1');

promise
.then(response => {
  // console.log(response.data.species);
  console.log(`Nombre del pokemon: ${response.data.name}`);
  const promise2 = axios.get(response.data.species.url);
  return promise2// GET https://pokeapi.co/api/v2/species/1
})
.then(response => {
  console.log(response.data.flavor_text_entries[6].flavor_text);
}).catch(error => {
  console.error(`ERROR FATAL: ${error}`);
})
