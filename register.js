document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    // Guardar los datos del usuario en localStorage
    localStorage.setItem('user', JSON.stringify({ name, email, password }));
    alert('Registro exitoso! Ahora puedes iniciar sesión.');
    window.location.href = 'login.html';
});
