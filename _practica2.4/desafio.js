let listaGenerica = [];
let lenguajesDeProgramacion = ['Javascript', 'C', 'C++', 'Kotlin', 'Python'];

lenguajesDeProgramacion.push('Java', 'Ruby', 'Golang');


function mostrarListaLenguajes(){
    console.log(lenguajesDeProgramacion);
}
mostrarListaLenguajes();

function mostrarLenguajesSeparado() {
    for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
      console.log(lenguajesDeProgramacion[i]);
    }
  }
  
mostrarLenguajesSeparado();

function listaLenguajesInversa(){
    console.log(lenguajesDeProgramacion.reverse());
}
listaLenguajesInversa();

function mostrarLenguajesReversoSeparado() {
    for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
      console.log(lenguajesDeProgramacion[i]);
    }
  }
  
mostrarLenguajesReversoSeparado();

function promedioListaNumeros(){
//FALTA
}
let listaNumeros = ['1','2','3','4','5'];

function maxMinLista(){
//FALTA
}

function sumaElementos(){
//FALTA
}

function indexLista(){
//FALTA  
}

function sumarListas(){
//FALTA      
}
sumarListas();