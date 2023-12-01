import { NAVIGATION_LINKS } from "./constants"

function Menu() {

  let html = ""

  for(let i = 0; i < NAVIGATION_LINKS.length; i++) {
    html += `
      <li class="nav-item">
        <a class="nav-link" href="${NAVIGATION_LINKS[i].link}">${NAVIGATION_LINKS[i].name}</a>
      </li>
    `
  }

  return `
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      ${NAVIGATION_LINKS.map(({link, name}) => {
        return `
          <li class="nav-item">
            <a class="nav-link" href="${link}">${name}</a>
          </li>
        `
      }).join("\n")
    }
    </ul>
  `
}

export default Menu
// module.export = Menu