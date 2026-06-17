// PLAYERS MODULE

import { openPlayerModal } from "./modal.js";
import { addFavorite } from "./storage.js";

const container = document.querySelector("#players-container");

let allPlayers = [];

// INIT
if (!container) {
    console.error("Players container not found.");
} else {
    getPlayers();
}

// FETCH DATA
async function getPlayers() {
    try {
        const response = await fetch("./data/players.json");

        if (!response.ok) {
            throw new Error("Failed to load players data");
        }

        const players = await response.json();
        allPlayers = players;

        displayPlayers(players);

    } catch (error) {
        console.error("Error fetching players:", error);
        container.innerHTML = "<p>Failed to load players.</p>";
    }
}

// RENDER PLAYERS
function displayPlayers(players) {

    if (!container) return;

    container.innerHTML = "";

    players.forEach(player => {

        const card = document.createElement("article");
        card.classList.add("player-card");

        card.innerHTML = `
            <img src="${player.image}" alt="${player.name}" loading="lazy">
            <h3>${player.name}</h3>
            <p><strong>Club:</strong> ${player.club}</p>
            <p><strong>Position:</strong> ${player.position}</p>

            <button class="view-btn" data-id="${player.id}">View Details</button>
            <button class="fav-btn" data-id="${player.id}">❤ Save</button>
        `;

        container.appendChild(card);
    });

    addEventListeners();
}

// EVENTS (CLEAN + NO DUPLICATES)
function addEventListeners() {

    document.querySelectorAll(".view-btn").forEach(btn => {
        btn.addEventListener("click", (event) => {

            const id = Number(event.target.dataset.id);
            const player = allPlayers.find(p => p.id === id);

            if (!player) return;

            openPlayerModal(player);
        });
    });

    document.querySelectorAll(".fav-btn").forEach(btn => {
        btn.addEventListener("click", (event) => {

            const id = Number(event.target.dataset.id);
            const player = allPlayers.find(p => p.id === id);

            if (!player) return;

            const result = addFavorite(player);

            if (result === "added") {
                alert(`${player.name} added to favorites`);
            } else if (result === "exists") {
                alert(`${player.name} is already in favorites`);
            }
        });
    });
}