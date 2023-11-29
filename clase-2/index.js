// const MenuImport = require("./menu.js")
// De forma destructurada
const { Menu, enhancedMenu } = require("./menu.js");
const User = require("./user")


const menu = new Menu();
menu.display();

enhancedMenu();

const user = new User();
user.greet();