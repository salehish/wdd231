document.addEventListener("DOMContentLoaded", () => {

    // Hamburger Menu
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    if (menuIcon && navLinks) {
        menuIcon.addEventListener("click", () => {
            navLinks.classList.toggle("open");
        });
    }

    // Last Modified Footer
    document.querySelector("#lastModified").textContent =
        document.lastModified;

    // Spotlight Members
    const spotlightContainer = document.querySelector("#spotlight-container");

    async function getSpotlights() {

        try {

            const response = await fetch("data/members.json");

            if (!response.ok) {
                throw new Error("Failed to load member data");
            }

            const members = await response.json();

            // Gold and Silver members only
            const qualifiedMembers = members.filter(member =>
                member.membership === 3 ||
                member.membership === 2
            );

            // Shuffle members randomly
            const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());

            // Select 3 members
            const selected = shuffled.slice(0, 3);

            displaySpotlights(selected);

        } catch (error) {

            console.error("Error loading spotlight members:", error);

        }
    }

    // Display Spotlight Cards
    function displaySpotlights(members) {

        spotlightContainer.innerHTML = "";

        members.forEach(member => {

            const card = document.createElement("div");

            card.classList.add("spotlight-card");

            card.innerHTML = `
                <h3 class="spotlight-name">${member.name}</h3>

                <hr>

                <div class="spotlight-content">

                    <img src="images/${member.image}" 
                         alt="${member.name}" 
                         class="spotlight-image">

                    <div class="spotlight-details">
                        <p>${member.address}</p>
                        <p>${member.phone}</p>
                        <p>${member.membership} Member</p>

                        <a href="${member.website}" target="_blank">
                            Visit Website
                        </a>
                    </div>

                </div>
            `;

            spotlightContainer.appendChild(card);

        });
    }

    getSpotlights();

    // Weather API
    const apiKey = "2a458dd014fa5913c782f98c5885bcc5";

    const city = "Kampala";

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    async function getWeather() {

        try {

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Weather data not found");
            }

            const data = await response.json();

            document.querySelector("#current-temp").textContent =
                `Temperature: ${data.main.temp}°C`;

            document.querySelector("#weather-desc").textContent =
                data.weather[0].description;

            document.querySelector("#forecast").textContent =
                `Humidity: ${data.main.humidity}%`;

        } catch (error) {

            console.error("Weather error:", error);

        }
    }

    getWeather();

});