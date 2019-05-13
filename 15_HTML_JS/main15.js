// alert("hola")

let nombre=document.getElementById("nombre");
let apellido= document.getElementById('apellido');
let mail= document.getElementById('mail');
let boton=document.getElementById("boton");
let texto=document.getElementById("texto");
 

// getElementById (Tener-elemnto por su ID)


const handleClick = () => { 
    let inputNombre=nombre.value;
    let inputApellido= apellido.value;
    let inputMail=mail.value;

    texto.innerHTML= inputNombre +" "+inputApellido +" "+inputMail;
}

boton.addEventListener("click",handleClick);
