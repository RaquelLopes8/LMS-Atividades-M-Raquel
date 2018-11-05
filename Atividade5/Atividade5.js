let sandubs = document.querySelector("menu-sandubs");
let menu = document.querySelector("menu");
let cont = document.querySelector("cont");
let t_acordeon = document.querySelector("titulo");
let cont_acordeon = document.querySelector("cont-acordeon");

function show(){
    if(menu.style.right == "15vw"){
        menu.classList.toggle("menu");
    }

    menu.classList.toggle("menu");
}

function show_1(i){
    if(cont_acordeon[i].style.maxHeight == "150px"){
        cont_acordeon[i].style.maxHeight = "0px";
    } else{
        cont_acordeon[i].style.maxHeight = "150px";
    }
    for(let li of cont_acordeon){
            if(li != cont_acordeon[i] && li.style.maxHeight == "150px"){
                li.style.maxHeight = "0px";
            }
    }

}

menu-sandubs.addEventListener("click", show);