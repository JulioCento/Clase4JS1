var nombres = [];
var d1;
var d2;
var datosF = [nombres, d1, d2]

// DATES REQUEST
var cantidad = parseFloat(prompt("Ingrese el numero de estudiantes a registrar"));

for (let i = 0; i < cantidad; i++) {
    //ASK INFO AND ADD 
    nombres.push(prompt("Por favor ingrese el nombre N" + (i + 1) + " a registrar"));

    // CALIFICATIONS REQUEST
    alert("INGRESE LAS NOTAS DE " + nombres[i].toUpperCase())
    var d1A = parseFloat(prompt("Ingrese la nota del desafio 1"));
    var d2A = parseFloat(prompt("Ingrese la nota del desafio 2"));
    d1.push(d1A);
    d2.push(d2A);
    console.table(datosF);
}



nombres = [
    [fulano],
    [mengano],
    [sutejo]
]


