//Ejemplo de una función en forma tradicional

//Para crear un objeto en javaScript y devolverlo como Json

const Empresa = {
  id: 580062,
  name: 'Cartonajes Estrella S.A. De C.V.',
  date: new Date(),
  client: 'Mario Zamora',
  total: 1000,
};


Empresa.total = 5000;
console.log(Empresa);

//Para mostrar solo un campo en particular
//Muestra solo el nombre de la empresa en formato Json
console.log(Empresa.name);

//Muestra solo el nombre del cliente en formato Json
console.log(Empresa.client);

//Para modificar un atributo

Empresa.client = "Coca-Cola Company";

console.log(Empresa.client);
