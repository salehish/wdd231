import { getFavorites, removeFavorite } from "./storage.js";

const container = document.querySelector("#favorites-container");

if (!container) {
    console.error("Favorites container not found.");
} else {
    displayFavorites();
}

// RENDER FAVORITES
function displayFavorites() {

    const favorites = getFavorites();

    container.innerHTML = "";

    if (favorites.length === 0) {
        container.innerHTML = "<p>No favorite players saved yet.</p>";
        return;
    }

    favorites.forEach(player => {

        const card = document.createElement("article");
        card.classList.add("player-card");

        card.innerHTML = `
            <img src="${player.image}" alt="${player.name}" loading="lazy">
            <h3>${player.name}</h3>
            <p><strong>Club:</strong> ${player.club}</p>
            <p><strong>Position:</strong> ${player.position}</p>
            <p><strong>Nationality:</strong> ${player.nationality}</p>

            <button class="remove-btn" data-id="${player.id}">
                Remove Favorite
            </button>
        `;

        container.appendChild(card);
    });

    addRemoveEvents();
}

// REMOVE EVENTS (SAFE + CLEAN)
function addRemoveEvents() {

    document.querySelectorAll(".remove-btn").forEach(btn => {

        btn.addEventListener("click", (event) => {

            const id = Number(event.target.dataset.id);

            removeFavorite(id);

            displayFavorites();
        });
    });
}