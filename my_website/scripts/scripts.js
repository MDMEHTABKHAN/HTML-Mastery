// JavaScript for form submission
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display a message
    document.getElementById('formMessage').textContent = `Thank you, ${name}! Your message has been sent.`;

    // Clear the form
    document.getElementById('contactForm').reset();
});