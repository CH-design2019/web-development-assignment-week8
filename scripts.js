document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const messageEl = document.getElementById('formMessage');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Clear previous message
    messageEl.textContent = '';
    messageEl.classList.add('hidden');

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      messageEl.textContent = 'Please fill in all fields.';
      messageEl.classList.remove('hidden');
      messageEl.style.color = 'red';
      return;
    }

    // Simple email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      messageEl.textContent = 'Please enter a valid email address.';
      messageEl.classList.remove('hidden');
      messageEl.style.color = 'red';
      return;
    }

    messageEl.textContent = 'Thank you for your message!';
    messageEl.classList.remove('hidden');
    messageEl.style.color = 'green';

    // Here you would normally handle form submission (send data to server)
    form.reset();
  });
});
