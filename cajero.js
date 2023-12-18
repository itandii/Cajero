//Correo y contraseña verificada
const emailVerify = "marjorie@email.com" 
const passwordVerify = "ScrapOfYou"
const emailVerify2 = "dorothea@email.com"
const passwordVerify2 = "StillTheSameSoul"
const emailVerify3 = "willow@gmail.com"
const passwordVerify3 = "ThatsMyMan" 


const logIn = document.getElementById('formulario')

logIn.addEventListener("submit", function(event){ 
    event.preventDefault();

    const email = document.getElementById("username").value
    const password = document.getElementById("password").value

    if(email === emailVerify && password === passwordVerify){
        window.location.href = "interfazM.html"
    } else if(email === emailVerify2 && password === passwordVerify2){
        window.location.href = "interfazD.html"
    } else if(email === emailVerify3 && password === passwordVerify3){
        window.location.href = "interfazW.html"
    }
    
    else{
       const mensaje = document.createElement("p")
       mensaje.textContent = "Este correo electrónico no está registrado o la contraseña no coincide. Intenta de nuevo"
       mensaje.setAttribute("style", "color: white")

       document.body.appendChild(mensaje)
    } 
})