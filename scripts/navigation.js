document.addEventListener("DOMContentLoaded",
    () => {
        document.getElementById("currentyear").textContent = new Date().getFullYear();
        document.getElementById("lastModified").textContent =
            "Last Modified: " + document.lastModified;

        const menuButton = document.querySelector("#menu");
        const nav = document.querySelector("#nav");

        menuButton.addEventListener("click", () => {
            nav.classList.toggle("open");
        });


    });