function obtenerImc(peso, altura){
    return peso / (altura * altura);
}
let imc = parseFloat(obtenerImc(80, 1.66));
console.log(`Tu imc es de ${imc}`);

function calcularFactorial(n){
    if (n === 0) {
        return 1;
     } else {return n * (calcularFactorial(n - 1));
    } 
}
console.log(calcularFactorial(5));

function realAdolar(dolar){
    return dolar * cotizaDolar
}
const cotizaDolar = 4.80
let valorDolar = 100;
let dolar = (realAdolar(valorDolar));
console.log(`${valorDolar} Dolares Son unos ${dolar} Reales`);

function calculoArea(a, b) {
    return a * b 
}
let area = parseFloat(calculoArea(2.3, 5));
console.log(`El area de la sala es de ${area} m2`);

function calculoPerimetro(a, b){
    return 2 * (a + b);
}
let perimetro = parseFloat(calculoPerimetro(2.3, 5));
console.log(`El perimétro de la sala es de ${perimetro} m2`);

function areaCircular(radio){
    return 3.14 * (radio * radio);
}
let radio = parseFloat(areaCircular(16));
console.log(`El área de la sala circular es de ${radio} m2`)

function calculoPerimetroCirculo(radioPerimetro){
    return 2 * (3.14 * radioPerimetro);
}
let radioPerimetro = parseFloat(calculoPerimetroCirculo(16));
console.log(`El perímetro de la sala circular es de ${radioPerimetro} m2`);


//este es util cuando tenemos segmentos
function mostrarTablaDeMultiplicar(num) {
    for (var i = 1; i <= 10; i++) {
      var resultado = num * i;
      console.log(num + " x " + i + " = " + resultado);
    }
  }
  // Ejemplo de uso
  let num = 9;
  mostrarTablaDeMultiplicar(num);
 