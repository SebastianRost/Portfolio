
new universalParallax().init({
	speed: 6.0
});
AOS.init();
//barra de navegacion ocultable
let ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal>=desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top="0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top="-100px"
    }
    ubicacionPrincipal=desplazamientoActual;
})

//menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;
//si al menu hamburguesa le das click realiza funcion desde la pos 0
document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
   if(semaforo){
       document.querySelectorAll(".hamburguer")[0].style.color="#fff";
       semaforo=false;
   }else{
   document.querySelectorAll(".hamburguer")[0].style.color="#5d6678";
   semaforo=true;
}
    enlacesHeader.classList.toggle("menu2")
})
document.getElementsByClassName("enlace")[0].addEventListener("click", function(){
    enlacesHeader.classList.toggle("menu2")
   })
document.getElementsByClassName("enlace")[1].addEventListener("click", function(){
    enlacesHeader.classList.toggle("menu2")
    })
document.getElementsByClassName("enlace")[2].addEventListener("click", function(){
    enlacesHeader.classList.toggle("menu2")
    })
document.getElementsByClassName("enlace")[3].addEventListener("click", function(){
    enlacesHeader.classList.toggle("menu2")
    })
document.getElementsByClassName("enlace")[4].addEventListener("click", function(){
    enlacesHeader.classList.toggle("menu2")
    })
    
    

