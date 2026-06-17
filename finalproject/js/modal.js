// ================================
// MODAL MODULE
// Football Players Directory
// Handles opening/closing player details modal
// ================================

// DOM ELEMENTS
const modal = document.querySelector("#player-modal");
const modalContent = document.querySelector("#modal-content");
const closeBtn = document.querySelector("#close-modal");

// ================================
// OPEN MODAL FUNCTION
// ================================
export function openPlayerModal(player) {
    if (!player) return;
    
    if (!modal || !modalContent) return;

    modalContent.innerHTML = `
        <h2>${player.name}</h2>
        <p><strong>Club:</strong> ${player.club}</p>
        <p><strong>Position:</strong> ${player.position}</p>
        <p><strong>Nationality:</strong> ${player.nationality}</p>
        <p><strong>Age:</strong> ${player.age}</p>
        <p><strong>Goals:</strong> ${player.goals}</p>
        <p><strong>Assists:</strong> ${player.assists}</p>
    `;

    modal.showModal();
}

// ================================
// CLOSE MODAL FUNCTION
// ================================
export function closePlayerModal() {
    if (modal) modal.close();
}

// ================================
// EVENT LISTENERS (REQUIRED)
// ================================
if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        closePlayerModal();
    });
}

// Close when clicking outside modal box (optional UX improvement)
if (modal) {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.close();
        }
    });
}