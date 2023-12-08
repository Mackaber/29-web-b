function Form() {

  document.addEventListener('DOMContentLoaded', (event) => {
    const product_form = document.getElementById("product_form");

    product_form.addEventListener("submit", (event) => {
      event.preventDefault()

      
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