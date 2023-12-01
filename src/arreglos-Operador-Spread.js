//Se genera arreglo 1
const arreglo1 = [
  "Corredora",
  "Escritorio",
  "Tapete",
];

//Se genera arreglo 2
const arreglo2 = [
    "servidor", 
    "teclado", 
    "CPU"
];

//Se agregan articulos al arreglo 1 por el metodo push
arreglo1.push("pantalla LCD", "Sony T.V.");

//Se agregan articulos al arreglo 2 por el metodo push
arreglo2.push("Protector","Adapter");

//Se concantenan arreglo1 y arreglo2 con el metodo spread
const concentrado = [...arreglo1, ...arreglo2,'Lapiz','Lapicero'];

//Se recorren el arreglo concentrado por una función lambda
concentrado.forEach(x => console.log(x));


//Se genera arreglo3
const arreglo3 = ["Mario","Paty","Diana","Violeta","Daniela","Chorchitas"];

//Se genera arreglo4

const arreglo4 = ["Zamora","Aburto","Zamora Aburto","Zamora Aburto","Zamora Aburto","Miramon Zamora"];

//Se concatenan arreglo1 y arreglo2 con la funcion concat
const arreglo5 = arreglo3.concat(arreglo4);

//Impresión en consola
console.log(arreglo3.concat(arreglo4));

//Se recorre arreglo concatenado por una función lambda
arreglo5.forEach(listado => console.log(listado));

