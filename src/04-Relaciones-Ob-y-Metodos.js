//Creación de objetos anidados
//En esta caso se crea el objeto "client", dentro del objeto Empresa
const Empresa = {
  id: 580062,
  name: "Cartonajes Estrella S.A. De C.V.",
  date: new Date(),
  client: {
    id: 4,
    nombre: "Jorge",
    apellido: "Dominguez",
    edad: 45,
  },
  total: 1000,
  calculo: function (a = 0, b = 0) {
    return `El resultado de la operacion es ${a + b}`;
  },
};

Empresa.total = 5000;

const calcular = Empresa.calculo(80, 20);

console.log(calcular);

console.log(Empresa);
