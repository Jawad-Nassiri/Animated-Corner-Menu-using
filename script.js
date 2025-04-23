const toggleBtn = document.querySelector('#toggle-btn')
const links = document.querySelectorAll('.menu a')






let isMenuOpen = false

function openMenu() {

    isMenuOpen = !isMenuOpen
    toggleBtn.style.transform = isMenuOpen ?  "rotate(45deg)" : "rotate(0)";

    links[0].style.transform = isMenuOpen ? "translate(150px, 0)" : "translate(0)"
    links[1].style.transform = isMenuOpen ? "translate(150px, 90px)" : "translate(0)"
    links[2].style.transform = isMenuOpen ? "translate(90px, 150px)" : "translate(0)"
    links[3].style.transform = isMenuOpen ? "translate(0, 150px)" : "translate(0)"
}

toggleBtn.addEventListener('click', openMenu)