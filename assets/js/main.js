//Oculta las imagenes al hacer click en la 'X'
document.getElementById("cerrar1").addEventListener("click",function(){
	document.getElementById("photo1").classList.toggle("ocultar");
})

document.getElementById("cerrar2").addEventListener("click",function(){
	document.getElementById("photo2").classList.toggle("ocultar");
})

document.getElementById("cerrar3").addEventListener("click",function(){
	document.getElementById("photo3").classList.toggle("ocultar");
})

document.getElementById("cerrar4").addEventListener("click",function(){
	document.getElementById("photo4").classList.toggle("ocultar");
})

//Muestra las imagenes al hacer click en 'restaurar'
document.getElementById("restaurar").addEventListener("click",function(){
document.getElementById("photo1").classList.remove("ocultar");
document.getElementById("photo2").classList.remove("ocultar");
document.getElementById("photo3").classList.remove("ocultar");
document.getElementById("photo4").classList.remove("ocultar");
})
