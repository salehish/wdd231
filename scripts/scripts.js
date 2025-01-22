document.addEventListener("DOMContentLoaded", function () {
    const date = new Date();
    const currentYear = date.getFullYear();
    document.getElementById("year").textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = "Last modified on " + lastModified;
});