async function loadMembers() {
    try {
      const response = await fetch('data/members.json');
      const members = await response.json();
      
      const container = document.querySelector('#members-container');
      members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        
        memberCard.innerHTML = `
          <img src="images/${member.image}" alt="${member.name}">
          <h2>${member.name}</h2>
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <a href="${member.website}">Visit Website</a>
          <p>Membership Level: ${member.membershipLevel}</p>
        `;
        
        container.appendChild(memberCard);
      });
    } catch (error) {
      console.error('Error loading member data:', error);
    }
  }
  
  loadMembers();
  