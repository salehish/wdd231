document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById('menu');
    const navList = document.querySelector('nav ul');

    menuButton.addEventListener('click', function() {
        navList.classList.toggle('active');  
    });
});