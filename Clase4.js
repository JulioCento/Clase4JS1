//Declaracion de arreglos paralelos
var nombres = ["fulano", "mengano", "sutano","mengano", "pepito"];
var desafio1 = [100, 80, 60, 90, 70];
var desafio2 = [60, 80, 100, 65, 100];

//Declaracion de matriz
var matrizDeDatos = [
    ["Nombres", "Desafio1", "Desafio2"],
    ["fulano", 100, 60],
    ["mengano", 80, 80],
    ["sutano", 60, 100]
]

console.log(matrizDeDatos.length);
console.table(matrizDeDatos);
console.log(`El primer nombre es: ${nombres[0]}`);
console.log(`El primer nombre es: ${matrizDeDatos[1][0]}`);

//Recorrido de arreglos paralelos
for (let i = 0; i < nombres.length; i++) {
    let auxProm = (desafio1[i] + desafio2[i]) / 2;
    alert(`El estudiante ${nombres[i]}, tiene un promedio de: ${auxProm} puntos`);
}

//Recorrido de matriz
// for (let i = 1; i < matrizDeDatos.length; i++) {
//     let acum = 0;
//     for (let j = 1; j < 3; j++) {
//         acum = acum + matrizDeDatos[i][j];
//     }
//     let auxProm = acum / 2;
//     // let auxProm = (matrizDeDatos[i][1] + matrizDeDatos[i][2]) / 2;

//     alert(`El estudiante ${matrizDeDatos[i][0]}, tiene un promedio de: ${auxProm} puntos`);
// }

//Practica Cap 13
/**
 * Solicitar al usuario un nombre para buscarlo en el arreglo.
 * En caso de encontrarlo mostrar el indice en donde se encuentra.
 * Mostra luego sus notas.
 * Validar que el usuario se encuentra solo una vez en el arreglo.
 * 
 * Array.includes(dato); true o false
 * Array.indexOf(dato); el indice  o -1 (en caso de no encontrar)
 */
var nombreBuscado = prompt("Ingrese el nombre del estudiante a buscar");
if(nombres.includes(nombreBuscado)){
    alert("El estudiante fue encontrado")
}
var indexNombre = nombres.indexOf(nombreBuscado);
var lastIndexNombre = nombres.lastIndexOf(nombreBuscado);
if (indexNombre !== -1) {
    if(indexNombre != lastIndexNombre){
        alert("Error, el nombre del estudiante se repite");
    }else{
        alert("el estudiante esta en la posicion " + indexNombre);
        alert(`la nota 1 es:  ${desafio1[indexNombre]}`);
        alert(`la nota 2 es:  ${desafio2[indexNombre]}`);
        
    }
}


