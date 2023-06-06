function calcular() {
    var edad = parseInt(prompt("Ingrese su edad:"));
    var genero = prompt("Ingrese su género (masculino/femenino):");
    var cobertura = prompt("Ingrese el tipo de cobertura (basica/premium):");

    var factorEdad = obtenerFactorEdad(edad);
    var factorGenero = obtenerFactorGenero(genero);
    var factorCobertura = obtenerFactorCobertura(cobertura);

    var precioBase = 100;
    var precioFinal = calcularPrecioFinal(precioBase, factorEdad, factorGenero, factorCobertura);

    mostrarResultado(precioFinal);
}

function obtenerFactorEdad(edad) {
    if (edad >= 18 && edad <= 30) {
        return 0.5;
    } else if (edad > 30 && edad <= 50) {
        return 1;
    } else if (edad > 50) {
        return 1.5;
    } else {
        return 0;
    }
}

function obtenerFactorGenero(genero) {
    if (genero === 'masculino') {
        return 1.2;
    } else if (genero === 'femenino') {
        return 0.8;
    } else {
        return 0;
    }
}

function obtenerFactorCobertura(cobertura) {
    if (cobertura === 'basica') {
        return 1;
    } else if (cobertura === 'premium') {
        return 1.5;
    } else {
        return 0;
    }
}

function calcularPrecioFinal(precioBase, factorEdad, factorGenero, factorCobertura) {
    return precioBase * factorEdad * factorGenero * factorCobertura;
}

function mostrarResultado(precioFinal) {
    alert("El precio del seguro es: $" + precioFinal.toFixed(2));
}
