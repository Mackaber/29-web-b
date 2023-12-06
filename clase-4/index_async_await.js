const axios = require('axios');
const call_pokeapi = async () =>  {
  try {
    let response = await axios.get('https://pokeapi.co/api/v2/pokemon/1')

    response = await axios.get(response.data.species.url)

    console.log(`Nombre del pokemon: ${response.data.name}`);
    console.log(response.data.flavor_text_entries[6].flavor_text);
  } catch (error) {
    console.error(`ERROR FATAL: ${error}`);
  }

}

call_pokeapi()