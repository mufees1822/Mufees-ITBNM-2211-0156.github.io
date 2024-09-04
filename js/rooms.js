document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('booking-form');
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close-btn');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Validate form fields
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const room = document.getElementById('room').value;
        const checkin = document.getElementById('checkin').value;
        const checkout = document.getElementById('checkout').value;

        if (name && email && room && checkin && checkout) {
            // Show pop-up message
            popup.style.display = 'flex';
            form.reset(); // Reset the form fields
        } else {
            alert('Please fill out all fields.');
        }
    });

    // Close the pop-up when clicking on the close button
    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    // Close the pop-up when clicking outside the pop-up content
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
