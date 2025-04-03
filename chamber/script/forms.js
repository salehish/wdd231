document.getElementById('timestamp').value = new Date().toISOString();

const modals = document.querySelectorAll('.modal');
const modalLinks = document.querySelectorAll('[data-toggle="modal"]');
const closeButtons = document.querySelectorAll('.close');

modalLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetModal = document.querySelector(link.getAttribute('href'));
        targetModal.style.display = 'flex';
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
    });
});
