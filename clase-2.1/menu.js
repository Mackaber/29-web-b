function Menu(home_link, about_link, contact_link) {

  return `
    <ul class="menu">
      <li><a href="${home_link}" >Home</li>
      <li><a href="${about_link}">About</li>
      <li><a href="${contact_link}">Contact</li>
    </ul>
  `
}

export default Menu
// module.export = Menu