'use strict';

function checkTextField() {
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var nameRequired = document.getElementById("name-required");
    
    
    if (name.length == 0) {
        event.preventDefault();
        console.log("no name");
        nameRequired.style.opacity = "1";
    } else {
        console.log(name);
    }
}