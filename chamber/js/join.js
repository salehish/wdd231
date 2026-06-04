document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("open");
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
    const lastModified = document.querySelector("#lastModified");

    if (lastModified) {
        const fileTime = new Date(document.lastModified).toLocaleString();
        const currentTime = new Date().toLocaleString();

        lastModified.innerHTML = `
            File Modified: ${fileTime}<br>
            Current Time: ${currentTime}
        `;
    }
});

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