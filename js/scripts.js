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
 if( count< 10){
    count ++ ;}
    document.getElementById(inputId).value = count;
}


//const container = document.getElementById('adoptCard-container');

//const card = document.createElement('div');
//card.classList.add('adoptCartCard');

//card.innerHTML=`
//<img src="../assets/img/adopt1.png" class = "cartImg">



`

