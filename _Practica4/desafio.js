let nombre = ('Fabricio');
let valor1 = 6;
let valor2 = 9;
let resultadoSuma = (valor1 + valor2);
let resultadoResta = (valor1 - valor2);



alert(`Hola ${nombre}!!`);
console.log(`Hola ${nombre}, bienvenido!`);
let respuesta = prompt('¿Cúal es el lenguaje de programación qué más te gusta?');
console.log(respuesta);
console.log(resultadoSuma);
console.log(resultadoResta);
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultadoSuma}.`);
console.log(`La resta de ${valor1} y ${valor2} es igual a ${resultadoResta}.`);

let edad = parseInt(prompt('Me puedes indicar tu edad?'));
    if (edad >= 18){ console.log('Eres mayor de edad');
}else {console.log('Eres menor de edad');
    
}
//muestra el tipo de valor que es la variable. en este caso es una variable tipo entera
console.log(typeof(edad));

let numero = parseInt(prompt('Indica un número cualquiera'));
if (numero == 0){ console.log('El numero claro que es 0');
}else if (numero < 0){console.log('El numero es negativo');}
else {console.log('El número es positivo');
}

let contador = 1;
while (contador <= 10){
    console.log('Contado hasta ' + contador);
    contador++;
}
// Utilice un metodo obtener un numero aleatorio de nota de Examen. 
let nota = Math.floor(Math.random()*10)+1;
alert(`Esta fue tú nota en el examen: ${nota}`);
console.log(nota);
if (nota >= 7){
    console.log('Felicidades has aprobado!'); alert('Felicidades has aprobado!');
}else {console.log('QUE LASTIMA, REPROBASTE!'); alert('QUE LASTIMA, REPROBASTE!');
}
// Aqui solo dejamos que la funcion math.random muestre un numero al azar
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);
alert(numeroAleatorio);
let numeroEntero = Math.floor(Math.random()*10)+1;
console.log(numeroEntero);
alert(numeroEntero);
let numeroMil = Math.floor(Math.random()*1000)+1;
console.log(numeroMil);
alert(numeroMil);

//una variante con template string
alert('La actividad de ayer iba con nota!! Veamos como te fue :)');
let nota2 = Math.floor(Math.random()*10)+1;
alert(`Te sacaste un: ${nota2}`);
alert(nota2 >= 7 ? 'APROBASTE! Dibuje maestro' : 'REPROBASTE! Chau a tu casa!!!');
console.log(nota2);