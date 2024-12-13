"use strict";


const nav = document.querySelector("nav");
const burger = document.querySelector("button")

function openMenu() {   

    nav.classList.toggle("abrir")

    burger.classList.toggle("ativo")
}