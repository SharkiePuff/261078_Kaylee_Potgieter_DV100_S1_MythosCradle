//let contact = document.forms['contact'];

//contact.addEventListener("submit", getContactInfo);

//function getContactInfo(event){

//event.preventDefault();
//}

 function decCount(inputId){
 let count = document.getElementById(inputId).value;
     if( count> 0){
    count -- ;}
    document.getElementById(inputId).value = count;

 }
  
function incCount(inputId){

 let count = document.getElementById(inputId).value;
    count ++ ;
    document.getElementById(inputId).value = count;
}

