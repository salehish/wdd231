document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector("#members-container");

    async function getMembers() {
        try {
            const response = await fetch("data/members.json");
            if (!response.ok) throw new Error("Failed to load data");

            const data = await response.json();
            displayMembers(data);
        } catch (error) {
            console.error("Error loading members:", error);
            container.innerHTML = "<p>Unable to load members.</p>";
        }
    }

    function displayMembers(members) {
        container.innerHTML = "";

        members.forEach(member => {
            const card = document.createElement("div");
            card.classList.add(`membership-${member.membership}`, "member-card");

            card.innerHTML = `
            <!-- Name + Tagline -->
            <div class="member-header">
                <h3>${member.name}</h3>
                ${member.description ? `<p class="member-tagline">${member.description}</p>` : ""}
                <hr>
            </div>

            <!-- Image + Details -->
            <div class="member-body">
                <img src="images/${member.image}" alt="${member.name}" class="member-image">
                <div class="member-details">
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <p>Membership Level: ${member.membership}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                </div>
            </div>
        `;

            container.appendChild(card);
        });

    }


    // Toggle Views
    document.querySelector("#gridBtn").addEventListener("click", () => {
        container.classList.add("grid");
        container.classList.remove("list");
    });

    document.querySelector("#listBtn").addEventListener("click", () => {
        container.classList.add("list");
        container.classList.remove("grid");
    });


    // Footer date and time 

    const rawLastModified = document.lastModified;

    if (rawLastModified) {
        const lastModDate = new Date(rawLastModified);

        document.querySelector("#lastModified").textContent =
            lastModDate.toLocaleString();
    } else {
        document.querySelector("#lastModified").textContent =
            "Not available";
    }

    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });


    getMembers();
});