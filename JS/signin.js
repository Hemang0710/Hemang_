  document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.form');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const email = document.getElementById('signin_email').value.trim();
      const password = document.getElementById('signin_password').value.trim();

      // Email validation using regular expression
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      // Password validation (at least 8 characters)
      if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
      }

      // If all fields are valid, submit the form
      form.submit();
    });
  });
