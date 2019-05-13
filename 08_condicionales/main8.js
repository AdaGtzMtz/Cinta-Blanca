// condicionales

// if(condicion){
// //  accion si nuestro condicional se cumple
// }
// else{
//     // accion si no se cumple
// }
// Ejemplo Practico
// let ingresa= prompt("Ingresa tu coontraseña") 
// let pass="soy un perrito"

// if(ingresa===pass){
//     console.log("Su contraseña es valida")
// }
// else{
//     console.log("Contraseña Incorrecta")
// }

// Operadores
// <menor que
// >mayor que
// =  Cambia valor
// ==  compara valor pero no el tipo
// ===  compara el valor y el tipo
// <= menor-igual
// >= mayor que

// **practica2

// let edad= prompt("Ingresa tu edad") 
// if(edad>=50){
//     console.log("Eres un anciano")
// }
// else if(edad>=50 && edad<=49){
//     console.log("Puedes destruir tu vida")
// }
// else{
//     console.log("tas morro")
// }

// if(condicion){
//     accion
// }
// else if{
//     segunda accion 
// }
// else{
//     accion si no se cumple ninguna accion
// }

// ++JUEGO PIEDRA PAPEL O TIJERA

let opcion1=prompt("JUGADOR 1.Selecciona una opcion: Piedra-Papel-Tijera")
let opcion2=prompt("JUGADOR 2.Selecciona una opcion: Piedra-Papel-Tijera")
let piedra="piedra"
let papel="papel"
let tijera="tijera"

 if(opcion1==papel && opcion2 ==piedra){
    console.log("Gana Jugador 1"); 
  }else if(opcion1==piedra && opcion2==tijera ){
     console.log("Gana Jugador 1");
  }else if(opcion1==tijera && opcion2==papel){
      console.log("Gana Jugador 1");
  }else if(opcion1==piedra && opcion2==papel){
      console.log("Gana Jugador 2");
  }else if(opcion1==tijera && opcion2==piedra){
    console.log("Gana Jugador 2");
  }else if(opcion1==piedra && opcion2 ==papel){
    console.log("Gana Jugador 2");
  }else if(opcion1==piedra && opcion2 ==piedra){
  console.log("Es un empate");
  }else if(opcion1==papel && opcion2==papel){
   console.log("Es un empate"); 
  }else if(opcion1==tijera && opcion2==tijera){
    console.log("Es un empate");
  }else{
      console.log("eso no es parte del juego")
  }
   