document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Obtener los datos del usuario almacenados
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
        alert('Login exitoso!');
        // Redirigir a la página principal
        window.location.href = 'homepage.html';
    } else {
        alert('Correo o contraseña incorrectos');
    }
});
