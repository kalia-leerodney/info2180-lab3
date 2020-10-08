"use strict";

document.body.onload = function addClassName(){
    let elem = document.getElementsByTagName("div").childNodes;

    for (i=0; i < elem.length ; i++){
        elem.className += "square";
    }
    
}


    
       




