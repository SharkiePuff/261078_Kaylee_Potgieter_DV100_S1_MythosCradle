function decCount(inputId) {
  let count = parseInt(document.getElementById(inputId).value) || 0;
  if (count > 0) {
    count--;
  }
  document.getElementById(inputId).value = count;
}

function incCount(inputId) {
 let count = parseInt(document.getElementById(inputId).value) || 0;
  if (count < 10) {
    count++;
  }
  document.getElementById(inputId).value = count;
}

//const creatures = [
  //{
    //id=a, name: "Azuron"
 // },
  //{
   // id=b, name: "Yuki"
  //},
  //{
    //id=c, name: "Aurelia"
  //},
  //{
   // id=d, name: "Lumina"
  //},
  //{
   // id=e, name: "Starwind"
  //},
  //{
   // id=f, name: "Briar"
  //},


//]

//const creatureSearch = document.getElementById('creatureSearch');
//const creaturesResultsContainer = document.getElementById('resultsContainer');

//function displayCreatures(creaturesDisplayed){

  //creaturesResultsContainer.innerHTML = '';
//}
let username=document.getElementById("name");
let storedName = JSON.parse(localStorage.getItem("storedName")) || [];
localStorage.setItem("username",username);
exampleModalLabel.innerHTML=`Hi, ${username}`


let amountAzuron=document.getElementById("azuronInput");
let amountYuki=document.getElementById("yukiInput");
let amountAurelia=document.getElementById("aureliaInput");
let amountLumina=document.getElementById("luminaInput");
let amountStarwind=document.getElementById("starwindInput");
let amountBriar=document.getElementById("briarInput");

let products = [
  { ID=document.getElementById("0"),
    name: "Azuron",
    image: `../assets/img/adopt1.png`,
    description: "Friendly ally",
    price: 2500,
    inputId: "azuronInput", 
  },
  { ID=document.getElementById("1"),
    name: "Yuki",
    image: "../assets/img/adopt2.png",
    description: "Gentle guardian",
    price: 4500,
    inputId: "yukiInput", 
  },
  { ID=document.getElementById("2"),
    name: "Aurelia",
    image: "../assets/img/adopt3.png",
    description: "Friendly ally",
    price: 6500,
    inputId: "aureliaInput",
  },
  { ID=document.getElementById("3"),
    name: "Lumina",
    image: "../assets/img/adopt4.png",
    description: "Beloved companion",
    price: 40000,
    inputId: "luminaInput",
  },
  { ID=document.getElementById("4"),
    name: "Starwind",
    image: "../assets/img/adopt5.png",
    description: "Gentle guardian",
    price: 5000,
    inputId: "starwindInput",
  },
  { ID=document.getElementById("5"),
    name: "Briar",
    image: "../assets/img/adopt6.png",
    description: "Beloved companion",
    price: 3500,
    inputId: "briarInput",
  },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let loadCart = () => {
  updateModalContent();
};

let container = document.getElementById("adoptContainer");
 

let name = products[0].name;
function addToCart(productIndex) {
  //add to cartArray
  cart.push(products[productIndex]);
  //update local storage
  localStorage.setItem("cart", JSON.stringify(cart));
   updateModalContent();
  console.log("add to cart");
}
  

  //creating modal content
 
const deleteButton=document.getElementById("deletebtn");
deleteButton.addEventListener('click',()=>
    {
      card.innerHTML=``
    });


function updateModalContent() {


  for(let cartItem of cart){
  let card = document.createElement("div");
  card.classList.add("adoptCartCard");

  //const x = ${inputId};
  //const y = ${price};
  
 //const total = x*y
  
 //console.log(total);

  card.innerHTML = `
  

      <div class= "cardElement1">
      <div class= "img">
      
      <img src=${products.ID} alt="Azuron" class="product-image">
      <div class="cartTitle">
      ${products.name}
      </div>
      </div>
      <div class="cardContent">
      
      


      <div class="cartItems">
                <button class="symbol" onclick="decCount('azuronInputCart')" >-</button>
                <input type="number" class="numberContainer input1" id="azuronInputCart">
                <button class="symbol" onclick="incCount('azuronInputCart')">+</button>
       </div>
              
      Sum:
    
        <button class=" dltbtn" onclick="deletebtn">Delete</button>
</div>
<div class="cartItems">
      Amount(R): 
      </div>
</div>

`;
    
  
    container.appendChild(card);
    };
    console.log("update modal");
    };
    window.addEventListener("DOMContentLoaded", loadCart);
