// alert ("hola")

let palabra=prompt("Escribe una palabra")
let resultado=''

for(i=0;i<palabra.length;i++){ 
    if(i%2===0){
    resultado+=palabra[i].toLowerCase()

    }else{
     resultado+=palabra.toUpperCase())
    }

}

console.log(resultado)