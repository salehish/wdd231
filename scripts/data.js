document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    const now = new Date();
    document.getElementById("lastModified").textContent =
        "Current Time: " + now.toLocaleString();
});