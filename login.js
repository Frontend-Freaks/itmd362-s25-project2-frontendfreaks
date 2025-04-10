document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle-create');
  const loginSection = document.getElementById('login-section');
  const createSection = document.getElementById('create-section');

  toggleButton.addEventListener('click', () => {
    loginSection.classList.toggle('hidden');
    createSection.classList.toggle('hidden');
    toggleButton.textContent = loginSection.classList.contains('hidden')
      ? 'Log in instead'
      : 'Create an account instead';
  });
});