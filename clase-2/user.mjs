class User {

    greet() {
      console.log("Hello world!")
    }

}


// Sólo funciona así, si tengo mjs o estoy usando algun empaquetador
// export default User
module.exports = User;