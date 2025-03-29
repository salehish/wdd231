const members = [
    {
        name: "Salehish Beauty Parlour and SPA",
        logo: "images/salehish.jpg",
        phone: "123-456-7890",
        address: "Cathadral road, Bugembe, Jinja",
        website: "http://salehishbeautyparlour",
        membershipLevel: "Gold"
    },
    {
        name: "American Boutique",
        logo: "images/boutique.jpg",
        phone: "234-567-8901",
        address: "Main Street Jinja",
        website: "http://americanboutique.com",
        membershipLevel: "Silver"
    },
];

function getSpotlightMembers() {
    const goldAndSilverMembers = members.filter(member => 
        member.membershipLevel === "Gold" || member.membershipLevel === "Silver"
    );
    const randomMembers = [];
    
    while (randomMembers.length < 3) {
        const randomIndex = Math.floor(Math.random() * goldAndSilverMembers.length);
        const randomMember = goldAndSilverMembers[randomIndex];
        if (!randomMembers.includes(randomMember)) {
            randomMembers.push(randomMember);
        }
    }
    
    const spotlightContainer = document.getElementById("spotlight-container");
    randomMembers.forEach(member => {
        const spotlightCard = document.createElement("div");
        spotlightCard.classList.add("spotlight-card");
        spotlightCard.innerHTML = `
            <img src="${member.logo}" alt="${member.name} Logo">
            <h3>${member.name}</h3>
            <p>Phone: ${member.phone}</p>
            <p>Address: ${member.address}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            <p>Membership: ${member.membershipLevel}</p>
        `;
        spotlightContainer.appendChild(spotlightCard);
    });
}

getSpotlightMembers();
