// Obtener factores del almacenamiento local o inicializarlos si no existen
var factores = JSON.parse(localStorage.getItem('factores'));
if (!factores) {
  factores = {
    edad: [
      { rango: "18-30", factor: 0.5 },
      { rango: "31-50", factor: 1 },
      { rango: "51+", factor: 1.5 }
    ],
    genero: [
      { tipo: "masculino", factor: 1.2 },
      { tipo: "femenino", factor: 0.8 }
    ],
    cobertura: [
      { tipo: "basica", factor: 1 },
      { tipo: "premium", factor: 1.5 }
    ]
  };
  localStorage.setItem('factores', JSON.stringify(factores));
}

function calcular() {
  var edad = obtenerEdad();
  var genero = obtenerGenero();
  var cobertura = obtenerCobertura();

  var factorEdad = obtenerFactor(edad, "edad");
  var factorGenero = obtenerFactor(genero, "genero");
  var factorCobertura = obtenerFactor(cobertura, "cobertura");

  var precioBase = 100;
  var precioFinal = calcularPrecioFinal(precioBase, factorEdad, factorGenero, factorCobertura);

  mostrarResultado(precioFinal);
}

function obtenerEdad() {
  var edad = parseInt(prompt("Ingrese su edad:"));
  while (isNaN(edad) || edad <= 0) {
    edad = parseInt(prompt("Edad inválida. Ingrese su edad nuevamente:"));
  }
  return edad;
}

function obtenerGenero() {
  var genero = prompt("Ingrese su género (masculino/femenino):");
  while (genero !== "masculino" && genero !== "femenino") {
    genero = prompt("Género inválido. Ingrese su género nuevamente:");
  }
  return genero;
}

function obtenerCobertura() {
  var cobertura = prompt("Ingrese el tipo de cobertura (básica/premium):");
  while (cobertura !== "básica" && cobertura !== "premium") {
    cobertura = prompt("Cobertura inválida. Ingrese el tipo de cobertura nuevamente:");
  }
  return cobertura;
}

function obtenerFactor(valor, tipo) {
  var listaFactores = factores[tipo];
  for (var i = 0; i < listaFactores.length; i++) {
    if (listaFactores[i].tipo === valor || listaFactores[i].rango === valor) {
      return listaFactores[i].factor;
    }
  }
  return 0;
}

function calcularPrecioFinal(precioBase, factorEdad, factorGenero, factorCobertura) {
  return precioBase * factorEdad * factorGenero * factorCobertura;
}

function mostrarResultado(precioFinal) {
  var resultadoDiv = document.getElementById("resultado");
  resultadoDiv.textContent = "El precio del seguro es: $" + precioFinal.toFixed(2);
}

calcular();
