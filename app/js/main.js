'use strict';

function checkTextField() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var nameRequired = document.getElementById("name-required");
    var emailRequired = document.getElementById("email-required");

    if (name.length == 0) {
        event.preventDefault();
        console.log("no name");
        nameRequired.style.opacity = "1";
    } else {
        nameRequired.style.opacity = "0";
        console.log(name);
    }

    if (email.length == 0) {
        event.preventDefault();
        console.log("no email");
        emailRequired.style.opacity = "1";
    } else {
        nameRequired.style.opacity = "0";
        console.log(email);
    }
}