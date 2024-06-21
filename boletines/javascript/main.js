

// DOM
// querySelector - querySelectorALL

/*
let links =document.querySelectorAll("a");


links.forEach(function(links){
    console.log(links);
})

console.log(links);
*/

/*
let celdas =document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener('click', function(){
        console.log("this");
    })
});
*/

let links = document.querySelectorAll(".close");

links.forEach(function(links){
    links.addEventListener("click", function(){
        ev.preventDefault();
        return false;
        setTimeout(function(){
            local.href = "/index.html";
        }, 1000); /* Espera un segundo antes de iniciar */
    });
});


/* Esta funcion solo funciona con iconos inicializados con un 
archico css independiente.

let icono = document.querySelectorAll("img");

icono.forEach(function(icono){
    icono.classList.remove("icono");
})

*/

