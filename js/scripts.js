let contact = document.forms['contact'];

contact.addEventListener("submit", getContactInfo);

function getContactInfo(event)

event.preventDefault();

let 