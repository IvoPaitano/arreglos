//                      LISTA DE SUPER 1

//  var listaDeSuper = []

//  listaDeSuper[0] = "Sal"
//  listaDeSuper[1] = "Aceite"
//  listaDeSuper[2] = "Vinagre"
//  listaDeSuper[3] = "Picante"
//  listaDeSuper[4] = "Fernet"

//  console.log("Primer producto: "+listaDeSuper[0]);

//  var ultimoElemento = listaDeSuper.length-1
//  console.log("Ultimo Elemento: "+listaDeSuper[ultimoElemento]);





//                      LISTA DE SUPER 2

//  var listaDeSuper2 = []

//  listaDeSuper2[0] = "Arroz"
//  listaDeSuper2[1] = "Aceite"
//  listaDeSuper2[2] = "Jamon"
//  listaDeSuper2[3] = "Mostaza"
//  listaDeSuper2[4] = "Agua"

//  listaDeSuper2.push("Chocolinas")
//  listaDeSuper2.push("Queso")

//  listaDeSuper2.unshift("Fernet")
//  listaDeSuper2.unshift("Pollo")

//  console.log("Lista: ",listaDeSuper2);
//  separador()

//  var noHabia = listaDeSuper2.pop()
//  console.log("No habia: ",noHabia);
//  console.log("Lista sin",noHabia,":",listaDeSuper2);
//  console.log("Quedan comprar:",listaDeSuper2.length,"productos");
//  separador()

//  var comprado = listaDeSuper2.shift()
//  console.log("Ya compramos:",comprado);
//  console.log("Falta comprar: ",listaDeSuper2);
//  console.log("Quedan comprar",listaDeSuper2.length,"productos");

// function separador() {
//     console.log("\n");
// }






//                      LISTA DE SUPER 3

//          PUNTO 1

//  var listaDeSuper3 = ["Arroz","Aceite","Jamon","Mostaza","Agua"]

//  for (var i = 0; i < listaDeSuper3.length; i++) {
//      console.log(listaDeSuper3[i]);
//  }


//          PUNTO 2

//  function logeitems(arreglo) {
//      var arregloReturn = []
//      var arregloSeparado = arreglo.split(",")
//      for (var i = 0; i < arregloSeparado.length; i++) {
//          arregloReturn.push(arregloSeparado[i])
//      }
//      console.log(arregloReturn);   
//  }

//  var listaDeUsuario = prompt("Ingrese productos:(uno,dos,tres)")
//  logeitems(listaDeUsuario)


//          PUNTO 3 , quitar comentarios de funcion logeitems y variable listaDeSuper3

// var x = prompt("Ingrese productos:(uno,dos,tres)")
// logeitems(x)
// logeitems(listaDeSuper3) //Error gracias al maravilloso SPLIT,para que funcione quite SPLIT y cambie el nombre del arreglo usao en logeitems


//          PUNTO 4

// function logeitemsFE(arreglo) {
//     var arregloReturn2 = []
//     var arregloSeparadoFE = arreglo.split(",")
//     arregloSeparadoFE.forEach(function(producto) {
//        arregloReturn2.push(producto)
//     });
//     console.log(arregloReturn2);
// }

// var listaDeUsuarioFE = prompt("Ingrese productos [separados por coma]:")
// logeitemsFE(listaDeUsuarioFE)





//                      POEMA DESORDENADO

//  var poemaDesordenado = "roses red are bacon crispy i bacon love and is blue violets are"
//  var arregloDesordenado = poemaDesordenado.split(' ')

//  var arregloOrdenado = []

//  var longitud = arregloDesordenado.length
//  var cero = 0


//          CON WHILE

//   while (longitud > (cero)) {

//       var primero =  arregloDesordenado.shift()
//       var ultimo =  arregloDesordenado.pop()

//       arregloOrdenado.push(primero)
//       arregloOrdenado.push(ultimo)
//       Number(cero++)
//   }
// console.log(arregloOrdenado.join(' '));


//          CON FOR

//  for (var i = 0; i < indice; i++) {
//     var primero =  arregloDesordenado.shift()
//     var ultimo =  arregloDesordenado.pop()

//     arregloOrdenado.push(primero)
//     arregloOrdenado.push(ultimo)
//  }

//  console.log(arregloOrdenado.join(' '));





//                      REVERSER

//          PUNTO 1

//   function printReverse(arreglof) {
//      var arreglofS = arreglof.split(",")
//      var longitud = arreglofS.length
    
//      var arregloAlrevez = []
//      for (var i = 0; i < longitud; i++) {
//          var elUltimo = arreglofS.pop()
//          console.log(elUltimo);
//      } 
//   }

//  var arreglo = prompt("Ingrese arreglo:(a,b,c)")
//  printReverse(arreglo)


//          PUNTO 2

//  function reverser(arreglof){
//     var arregloAux = arreglof.split(",")
//     var longitud = arregloAux.length 
//     var arreglofRetorno = []
//     for (var i = 0; i < longitud; i++) {
//         arreglofRetorno.push(arregloAux.pop())
//     }
//     console.log(arreglofRetorno);
//  }

//  var arreglo = prompt("Ingrese arreglo:(a,b,c)")

//  reverser(arreglo)





//                      IS UNIFORM

//  function isUniform(arreglo){
//      var uniforme = true;
//      var longitud = arreglo.length
//      for(var i = 0;i<longitud;i++){
//          if (arreglo[i]!=arreglo[i+1] && (i+1<longitud)){
//              uniforme = false;
//              break;
//          }
//      }
//      console.log(uniforme);
//  }

//  var parametro = prompt("Ingrese arreglo:")

//  isUniform(parametro)

//                      SUM ARRAY





//  function sumArray(arreglof) {
//      var cont = 0
//      newArreglof = arreglof.split(",")
//      for (var i = 0; i < newArreglof.length; i++) {
//          cont += Number(newArreglof[i])
//      }    
//      console.log(cont);
//  }

//  var arreglo = prompt("Ingrse arreglo de numeros:")

//  sumArray(arreglo)





//                      BIGGEST SMALLEST

// function biggest_smallest (arreglof) {

//     var newArreglof = arreglof.split(",")
//     var mayor = newArreglof[0]
//     var menor = newArreglof[0]
//     var arregloReturn = []
    
//     newArreglof.forEach(function(numero) {
//         if (Number(numero)>Number(mayor)) {
//             mayor = numero
//         }if (Number(numero)<Number(menor)) {
//             menor = numero
//         }
//     });
//     arregloReturn[0] = menor
//     arregloReturn[1] = mayor

//     return arregloReturn
// }

// var arreglo = prompt("Ingrese arreglo de numeros:")
// biggest_smallest(arreglo)

