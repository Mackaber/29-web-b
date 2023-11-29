function Search() {
  document.addEventListener('DOMContentLoaded', (event) => {
    const busqueda_input = document.getElementById("busqueda_input");
    const search_form = document.getElementById("search_form");

    search_form.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log(busqueda_input.value)
    })
  });

  return `
  <form id="search_form" class="d-flex" role="search">
    <input id="busqueda_input" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success" type="submit">Search</button>
  </form>
  `
}

export default Search