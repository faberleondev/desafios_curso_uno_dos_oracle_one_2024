function saludo (){
    let hola = ('Hola, mundo!'); 
    console.log(hola);  
}
saludo();

function saludoAmigo (nombre){
    console.log(`¡Hola ${nombre}`);  
}
saludoAmigo('Fabri');

function dobleDeUnNumero (numero){
    return numero * 2   
}
let resultDoble = dobleDeUnNumero(564);
console.log(resultDoble);

function calcularPromedio (a, b, c){
    return (a + b + c) / 3;
}
let promedio = calcularPromedio(6, 8, 4);
console.log(promedio);

function encuentraMayor (a, b){
    return a > b ? a : b;
}
let numMayor = encuentraMayor(15, 9);
console.log(numMayor);

function expNumero (numero){
    return numero * numero
}
let resultado = expNumero(112);
console.log(resultado);