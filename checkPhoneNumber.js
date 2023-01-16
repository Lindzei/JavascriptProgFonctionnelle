'use strict';
function checkPhoneNumber(phoneNumber) {
    let pattern = /^(06|07|01)[0-9]{8}$/;
    return pattern.test(phoneNumber);
  }
  let submitButton = document.getElementById("submit-button");
  submitButton.addEventListener("click", function() {
    let phoneNumber = document.getElementById("phone-number").value;
    let isValid = checkPhoneNumber(phoneNumber);
    if (isValid) {
      console.log("Numéro de téléphone valide");
    } else {
      console.log("Numéro de téléphone non valide");
    }
  });
  //Le numéro sera valide que si le numéro est complet
  