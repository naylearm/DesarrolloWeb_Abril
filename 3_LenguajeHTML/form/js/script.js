console.log("hola")


function validarLogin(event) {
    // Evita el envío del formulario por defecto
    event.preventDefault(); 
    // Obtener los valores de usuario y contraseña
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    usuarios = [
        {'username':'admin','password':'batman'},
        {'username':'pedrito','password':'123456'},
        {'username':'Juan','password':'abcd'},
    ]
    
    for (i=0;i<usuarios.length;i++){
        if (username === usuarios[i].username && password === usuarios[i].password) {
            //   alert('Inicio de sesión exitoso');
            window.location.href = './principal.html';
            // Aquí puedes redirigir al usuario a otra página o realizar otras acciones
        } else {
            // alert('Usuario o contraseña incorrectos');
            // Aquí puedes mostrar un mensaje de error o realizar otras acciones
        }
    }
    // Validar los campos del formulario

}