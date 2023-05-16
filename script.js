function calcular() {
    var edad = parseInt(document.getElementById('edad').value);
    var genero = document.getElementById('genero').value;
    var cobertura = document.getElementById('cobertura').value;

    var factorEdad = 0;
    var factorGenero = 0;
    var factorCobertura = 0;

    if (edad >= 18 && edad <= 30) {
        factorEdad = 0.5;
    } else if (edad > 30 && edad <= 50) {
        factorEdad = 1;
    } else if (edad > 50) {
        factorEdad = 1.5;
    }

    if (genero === 'masculino') {
        factorGenero = 1.2;
    } else if (genero === 'femenino') {
        factorGenero = 0.8;
    }

    if (cobertura === 'basica') {
        factorCobertura = 1;
    } else if (cobertura === 'premium') {
        factorCobertura = 1.5;
    }

    var precioBase = 100;
    var precioFinal = precioBase * factorEdad * factorGenero * factorCobertura;

    document.getElementById('resultado').innerHTML = "El precio del seguro es: $" + precioFinal.toFixed(2);
}
