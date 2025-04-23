const toggleBtn = document.querySelector('#toggle-btn')
const accountIcon = document.querySelector('.account')
const infoIcon = document.querySelector('.info')
const messageIcon = document.querySelector('.message')
const contactIcon = document.querySelector('.contact')





let isMenuOpen = false

function openMenu() {

    isMenuOpen = !isMenuOpen
    toggleBtn.style.transform = isMenuOpen ?  "rotate(45deg)" : "rotate(0)";

    accountIcon.style.transform = isMenuOpen ? "translate(150px, 0)" : "translate(0)"
    infoIcon.style.transform = isMenuOpen ? "translate(150px, 90px)" : "translate(0)"
    messageIcon.style.transform = isMenuOpen ? "translate(90px, 150px)" : "translate(0)"
    contactIcon.style.transform = isMenuOpen ? "translate(0, 150px)" : "translate(0)"
}

toggleBtn.addEventListener('click', openMenu)