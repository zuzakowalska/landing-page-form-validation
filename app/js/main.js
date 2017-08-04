'use strict';

function validateFields() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var agree = document.getElementById("agree-1");
    var nameRequired = document.getElementById("name-required");
    var emailRequired = document.getElementById("email-required");
    var checkRequired = document.getElementById("check-required");

    if (name.length == 0) {
        event.preventDefault();
        console.log("no name");
        nameRequired.style.opacity = "1";
    } else {
        nameRequired.style.opacity = "0"; }

    if (email.length == 0) {
        event.preventDefault();
        console.log("no email");
        emailRequired.style.opacity = "1";
    } else {
        emailRequired.style.opacity = "0"; }
    
    if (!agree.checked) {
        event.preventDefault();
        checkRequired.style.opacity = "1";
    } else {
    checkRequired.style.opacity = "0"; }
}