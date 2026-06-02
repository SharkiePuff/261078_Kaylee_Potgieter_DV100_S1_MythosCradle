let 

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


let container = document.getElementById('adoptCard-container');

let card = document.createElement('div');
card.classList.add('adoptCartCard');

card.innerHTML=`
<img src="${image}" class = "cartImg">
<div class="cartCardContent">

    <div class="cartContentLeft">
            <div class="cartName">Blue Dragon – Azuron</div>
            <div class="cartImg"><img src="../assets/img/adopt1.png"></div>
            </div>

            <div class="cartContentRight">

                
            <button class="blueCradle">Delete</button>
            </div>


`;

container.appendChild(card);

//addCradle.addEventListener("addCard", ()

//for(let item of )

//for(let food of favFoods){

        //if (food.checked == true){
            //formData['fav-foods'].push(food.value);
        
    