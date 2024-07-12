let semana = ["lunes", "martes", "miercoles", "jueves", "viernes"];
let fines = ['sabado', 'domingo'];
let diaElegido = prompt("¿Que día de la semana es hoy? Escribe con minúsculas!");
 console.log(diaElegido);
//COMPARAMOS LO QUE COLOCO EL USUARIO Y LOS DIAS CARGADOS EN EL ARRAY, con el metodo includes (busca lo que esta ingresado en el prompt si coincide con algun elemento de la lista)
if (semana.includes(diaElegido)) {
    alert("Que tengas buena semana!");
}   else {
        if (fines.includes(diaElegido)) {
            alert('Buen fin de semana!');
    }   else {
            alert("Quizas hayas escrito mal la palabra, vuelves a intentarlo?");
        }
 }
// BUSCAR QUE SEA INDISTINTO ENTRE MAYUSCULAS Y MINUSCULAS!


