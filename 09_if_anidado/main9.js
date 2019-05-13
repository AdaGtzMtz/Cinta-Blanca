

let edad=18
const nacionalidad="mx"
let residencia="mx"
let ine=true

if(edad>=18){
  if(nacionalidad==="mx"){
    if(ine===true){
       if(residencia==="mx"){
           console.log("Acude a tu modulo mas cercano")
       }else{
           console.log("Acude a tu embajada")
       }
    }else{
        console.log("Debes tener INE")
    }
   }else{
    console.log("Debes ser mexicano")  
  }
}else{
    console.log("Debes ser mayor de edad")
}


let numero=prompt("Introduce numero")

if(numero=numero % 2 == 0){
 console.log("Tu numero es par") 
}else{
  console.log("Tu numero es impar")
}
