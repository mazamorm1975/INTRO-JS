
//Ejemplo de una función en forma tradicional

function persona(nombre, apellido, edad){

  return `Hola, es un placer conocerte ${nombre} ${apellido} tu edad es ${edad} años`
}

console.log(persona('Mario', 'Zamora', 18));

//Ejemplo de la funcion anterior "persona" utilizando lambdas

const persona2 = (nombre, apellido, edad = 0) =>
  `Hola, es un placer conocerte ${nombre} ${apellido} tu edad es ${edad} años`;

console.log(persona2('Mario','Zamora', 48))