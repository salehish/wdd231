// FOOTBALL PLAYERS DIRECTORY
// MAIN JAVASCRIPT FILE
// Handles navigation + shared UI features

// DOM ELEMENTS
const menuButton = document.querySelector("#menu");
const nav = document.querySelector("#navigation");

if (menuButton) {
    menuButton.setAttribute("aria-expanded", "false");
}

// RESPONSIVE HAMBURGER MENU
// (REQUIRED: DOM + event handling)
if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
        nav.classList.toggle("open");

        // accessibility improvement
        const expanded = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", !expanded);
    });
}

// ACTIVE LINK HIGHLIGHT (WAYFINDING)
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("#navigation a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// LOCAL STORAGE INIT (SAFE CHECK)
// (used by players/favorites pages)
function getFavorites() {
    return JSON.parse(localStorage.getItem("favorites")) || [];
}

// optional global exposure (helps debugging + reuse)
window.getFavorites = getFavorites;