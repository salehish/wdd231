document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector("#members-container");

    async function getMembers() {

        try {

            const response = await fetch("data/members.json");

            if (!response.ok) {
                throw new Error("Failed to load data");
            }

            const data = await response.json();

            displayMembers(data);

        } catch (error) {

            console.error("Error loading members:", error);

            container.innerHTML = `
                <p>Unable to load members.</p>
            `;
        }
    }

    function displayMembers(members) {

        container.innerHTML = "";

        members.forEach(member => {

            const card = document.createElement("div");

            card.classList.add(
                `membership-${member.membership}`,
                "member-card"
            );

            card.innerHTML = `

                <div class="member-header">

                    <h3>${member.name}</h3>

                    ${member.description
                    ? `<p class="member-tagline">${member.description}</p>`
                    : ""
                }

                    <hr>

                </div>

                <div class="member-body">

                    <img 
                        src="images/${member.image}" 
                        alt="${member.name}" 
                        class="member-image"
                        loading="lazy"
                    >

                    <div class="member-details">

                        <p>${member.address}</p>

                        <p>${member.phone}</p>

                        <p>
                            Membership Level:
                            ${member.membership}
                        </p>

                        <a 
                            href="${member.website}" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Visit Website
                        </a>

                    </div>

                </div>
            `;

            container.appendChild(card);

        });
    }

    // Grid View
    document.querySelector("#gridBtn")
        .addEventListener("click", () => {

            container.classList.add("grid");

            container.classList.remove("list");

        });

    // List View
    document.querySelector("#listBtn")
        .addEventListener("click", () => {

            container.classList.add("list");

            container.classList.remove("grid");

        });

    // Footer Date
    const rawLastModified = document.lastModified;

    const lastModified = document.querySelector("#lastModified");
    

    if (rawLastModified) {

        const lastModDate = new Date(rawLastModified);

        lastModified.textContent =
            lastModDate.toLocaleString();

    } else {

        lastModified.textContent =
            "Not available";
    }

    // Mobile Navigation
    const menuIcon = document.querySelector(".menu-icon");

    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", () => {

        navLinks.classList.toggle("open");

    });

    getMembers();

});