"use strict";


window.onload = function addClassName() {
    let elem = document.querySelectorAll("#board div");

    for (let i=0; i < elem.length ; i++){
        elem[i].className += "square";
    }
}

    
       




