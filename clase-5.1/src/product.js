
// function Product(name, image, price) {
function Product({name, image, price}) { // product = { name: "Mesa", image: "http://....jpg", price: 300 }
  return `
    <div class="card g-col-4" style="width: 18rem;">
      <img src="${image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">Price: $${price}</p>
      </div>
    </div>
  `
}

export default Product