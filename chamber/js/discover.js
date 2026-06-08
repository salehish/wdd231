const response = await fetch("./data/places.json");
const places = await response.json();

const container = document.querySelector("#places-container");

places.forEach((place, index) => {

    const card = document.createElement("article");

    card.classList.add(`card${index + 1}`);

    card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
            <img src="${place.image}"
                 alt="${place.name}"
                 loading="lazy"
                 width="300"
                 height="200">
        </figure>

        <address>${place.address}</address>

        <p>${place.description}</p>

        <button>Learn More</button>
    `;

    container.appendChild(card);

});

const visitMessage = document.querySelector("#visitor-message");

const lastVisit = localStorage.getItem("lastVisit");

const now = Date.now();

if (!lastVisit) {

    visitMessage.textContent =
        "Welcome! Let us know if you have any questions.";

} else {

    const daysBetween =
        Math.floor((now - Number(lastVisit)) / 86400000);

    if (daysBetween < 1) {

        visitMessage.textContent =
            "Welcome back! We're glad to see you again.";

    } else if (daysBetween === 1) {

        visitMessage.textContent =
            "You last visited 1 day ago.";

    } else {

        visitMessage.textContent =
            `You last visited ${daysBetween} days ago.`;

    }
}

localStorage.setItem("lastVisit", now);

const year = document.querySelector("#year");
if (year) {
    year.textContent = new Date().getFullYear();
}

const lastModified = document.querySelector("#lastModified");
if (lastModified) {
    lastModified.textContent = document.lastModified;
}