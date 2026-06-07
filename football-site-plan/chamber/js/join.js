document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("open");
        });
    }

    document.querySelector("#lastModified").textContent =
        new Date(document.lastModified).toLocaleString();


    const timestamp = document.querySelector("#timestamp");
    if (timestamp) {
        timestamp.value = new Date().toISOString();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        document.querySelectorAll("dialog").forEach(d => d.close());
    }
});