export function getFavorites() {
    return JSON.parse(localStorage.getItem("favorites")) || [];
}

export function saveFavorites(favorites) {
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

// returns: "added" | "exists" | "invalid"
export function addFavorite(player) {

    if (!player) return "invalid";

    const favorites = getFavorites();

    const exists = favorites.some(f => f.id === player.id);

    if (exists) return "exists";

    favorites.push(player);
    saveFavorites(favorites);

    return "added";
}

export function removeFavorite(id) {

    const favorites = getFavorites().filter(
        player => player.id !== id
    );

    saveFavorites(favorites);
}