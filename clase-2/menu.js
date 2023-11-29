class Menu {

  display() {
    console.log("Elige una opcion:")
    console.log("a)")
    console.log("b)")
  }

  enhanced() {
    console.log("Enhanced Menu");
  }
}

function enhancedMenu() {
  const menu = new Menu();
  return menu.enhanced();
}

// module.exports = { Menu: Menu, enhancedMenu: enhancedMenu }

module.exports = { Menu, enhancedMenu }