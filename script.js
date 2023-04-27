const iconMenu = document.querySelector(".nav-menu--icon")
const menu = document.querySelector(".menu")

iconMenu.addEventListener("click", () => {
    menu.classList.toggle("hidden")
    menu.classList.add("flex")
    menu.classList.add("glass")
    menu.classList.add("text-xl")
    menu.classList.add("text-black")
})
menu.addEventListener("click", () => {
    menu.classList.add("hidden")
    menu.classList.remove("glass")
})
