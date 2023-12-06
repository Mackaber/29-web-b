
// Callbkack hell / Pyramid of doom
get('https://pokeapi.co/api/v2/pokemon/1', function (response) {
  // console.log(response.data.species);
  console.log(`Nombre del pokemon: ${response.data.name}`);
  get(response.data.species.url, function (response) {
    console.log(response.data.flavor_text_entries[6].flavor_text);

    get('https://pokeapi.co/api/v2/pokemon/1', function (response) {

    }, function (error) {

    })
  }, function (error) {
    
  })
}, function (error) {
  
})