const menuButton = document.querySelector(".menu-icon");
const navigation = document.querySelector(".nav-links");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        menuButton.classList.toggle("open");
    });

    const links = navigation.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            navigation.classList.remove("open");
            menuButton.classList.remove("open");
        });
    });
}