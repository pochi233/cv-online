//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales par aluego manipularlas
let reparador = document.getElementById("reparador");
crearBarra(reparador);
let programador = document.getElementById("programador");
crearBarra(programador);
let vendedor = document.getElementById("vendedor");
crearBarra(vendedor);
let atencion = document.getElementById("atencion");
crearBarra(atencion);
let manejo = document.getElementById("manejo");
crearBarra(manejo);
let impresoras = document.getElementById("impresoras");
crearBarra(impresoras);

//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barar
//para eso utilizo un arreglo, cada posiciòn pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalReparador = setInterval(function(){
            pintarBarra(reparador, 17, 0, intervalReparador);
        },100);
        const intervalProgramador = setInterval(function(){
            pintarBarra(programador, 17, 1, intervalProgramador);
        },100);
        const intervalVendedor = setInterval(function(){
            pintarBarra(vendedor, 17, 2, intervalVendedor);
        },100);
        const intervalAtencion = setInterval(function(){
            pintarBarra(atencion, 17, 3, intervalAtencion);
        },100);
        const intervalManejo = setInterval(function(){
            pintarBarra(manejo, 17, 4, intervalManejo);
        },100);
        const intervalImpresoras = setInterval(function(){
            pintarBarra(impresoras, 17, 5, intervalImpresoras);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#FF3131";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}