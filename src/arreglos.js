
//Se genera arreglo
const matriz = ['Corredora','Escritorio','Tapete','Juguetes','mouse','tenis'];

matriz.forEach( x => console.log(x));

//Impresión en consola
console.log(matriz);

//Iteración por medio de un for
for(const x of matriz){
    console.log(x);
}

//Iteración por un for clasico ya no utilizable
for(let i= 0; i<matriz.length; i++){
    const listado = matriz[i];
    console.log(listado);
}