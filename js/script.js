"use strict";

const btns = document.querySelectorAll("button");

btns[0].addEventListener("click", () => {
    // btns[1].classList.add("red")
    // btns[1].classList.toggle("aqua")
    btns.forEach(e => {
        e.classList.toggle("aqua")
    });
})