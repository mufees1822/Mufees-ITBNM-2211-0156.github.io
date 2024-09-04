document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close-btn');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Validate form fields
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const confirmEmail = document.getElementById('confirm-email').value.trim();
        const message = document.getElementById('message').value.trim();

        const phonePattern = /^0(76|77|75|78|72)\d{7}$/;

        if (phonePattern.test(phone) && email && confirmEmail && message) {
            if (email === confirmEmail) {
                // Show pop-up message
                popup.style.display = 'flex';
                form.reset(); // Reset the form fields
            } else {
                alert('Email addresses do not match.');
            }
        } else {
            alert('Please fill out all fields correctly.');
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
