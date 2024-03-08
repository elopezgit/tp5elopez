document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formularioAdivinar').addEventListener('submit', function(evento) {
        evento.preventDefault();
      
        // Generar un número aleatorio entre 1 y 100
        var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
      
        // Obtener el valor ingresado por el usuario
        var entradaUsuario = parseInt(document.getElementById('inputNumero').value);
      
        // Mostrar el número aleatorio y el número ingresado por el usuario en el HTML
        var resultadoHTML = 'El número aleatorio generado fue: ' + numeroAleatorio + '.<br>';
        resultadoHTML += 'El número ingresado por el usuario fue: ' + entradaUsuario + '.<br>';
      
        // Comprobar si el usuario adivinó el número
        if (entradaUsuario === numeroAleatorio) {
          resultadoHTML += '¡Felicidades! Adivinaste el número ' + numeroAleatorio + '.';
        } else {
          // Mostrar si el número ingresado es mayor o menor que el número aleatorio
          if (entradaUsuario < numeroAleatorio) {
            resultadoHTML += 'El número ingresado es menor que el número aleatorio.';
          } else {
            resultadoHTML += 'El número ingresado es mayor que el número aleatorio.';
          }
        }
      
        // Mostrar el resultado en el elemento con id "resultadoJuego"
        document.getElementById('resultadoJuego').innerHTML = resultadoHTML;
      
        // Limpiar el campo de entrada
        document.getElementById('inputNumero').value = '';
    });
});
