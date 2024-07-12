//Variables
let numeroSecreto = 7;
let numeroUsuario = 0;
let intentos = 1;
let veces = 'vez';
while (numeroUsuario != numeroSecreto) {
    let numeroUsuario = prompt("Ingresa un número entre 1 y 10 por favor:");

    console.log(numeroUsuario);
    //Los condicionales (if else if e if anidados)
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${veces}`);
    } else {
        //Pista para que intente una nueva vez, comentandole que el numero que eligio es menor o mayor
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor')
        }else {
            alert('El número secreto es mayor')
        }
        //Incrementamos el contador cuando no hay aciertos
        intentos = intentos + 1;
        veces = 'veces';
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}