//Utilizando el operadora terniario
const average = 5.9;
const status2 = (average >= 5.5) ? 'Aceptado': 'Rechazado';
console.log(`Resultado: ${status2}`);



//Utilizando if's para evaluar

//const average = 5.9;
//let status2 = 0;
//if(average >= 6.0){
//    status2 = 'Aceptado';
//} else {
//    status2 = 'Rechazado';
//}
//console.log(`Resultado: ${status2}`);

//Para evalugar un numero Maximo entre 3 valores

let max = 0;

const a = 12;
const b = 7;
const c = 9;

max = (a > b) ? a : b;
max  = max > c ? max : c;

console.log(`Resultado de numero mas grande : ${max}`);
