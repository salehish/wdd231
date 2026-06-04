const params = new URLSearchParams(window.location.search);

function safeGet(key) {
    const value = params.get(key);
    return value ? value : "Not provided";
}

const results = document.querySelector("#results");

if (results) {
    results.innerHTML = `
        <p><strong>First Name:</strong> ${safeGet("fname")}</p>
        <p><strong>Last Name:</strong> ${safeGet("lname")}</p>
        <p><strong>Email:</strong> ${safeGet("email")}</p>
        <p><strong>Phone:</strong> ${safeGet("phone")}</p>
        <p><strong>Organization:</strong> ${safeGet("organization")}</p>
        <p><strong>Date Submitted:</strong> ${safeGet("timestamp")}</p>
    `;
}

document.querySelector("#lastModified").textContent =
    new Date(document.lastModified).toLocaleString();
console.log("Current time:", new Date().toLocaleString());
console.log("Last modified:", new Date(document.lastModified).toLocaleString());