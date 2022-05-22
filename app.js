var removebtn = document.getElementsByClassName("product-remove");
for (let i=0; i<removebtn.length; i++){
    let button = removebtn[i];
    button.addEventListener("click",function(event){
        let clicked = event.target;
        clicked.parentElement.parentElement.remove();
        cartTotal();
        })
        
}



function cartTotal(){
    let item = document.getElementsByClassName("shopping-cart")[0];
    let itemRaws = item.getElementsByClassName("_grid shopping-cart--list-item");
    let total = 0;
    for(let i=0; i<itemRaws.length; i++){
        let itemRaw = itemRaws[i];
        let priceElemnt = itemRaw.getElementsByClassName("product-single-price")[0];
        let qtyElement   = itemRaw.getElementsByClassName("product-qty")[0];
        
        let price = priceElemnt.innerText;
        let qty = qtyElement.innerText;
        total = total +(price*qty);
    }
    document.getElementById("total").innerText = '$ ' + total;
}
cartTotal();

let item = document.getElementById("shopping-cart--list");
let total = document.getElementById("total");
let finalPrice = 0;



item.addEventListener("click", like);
function like(e) {
  if (e.target.classList.contains("material-icons")) {
    var attributes = e.target.getAttribute("class");
    if (attributes.includes("color")) {
      e.target.setAttribute("class", "material-icons");
    } else {
      e.target.setAttribute("class", "material-icons color");
    }
  }
}

// var qty =document.getElementById("total");


item.addEventListener("click",inc);
function inc(e){
  if (e.target.classList.contains("product-plus")){
      let qty = parseInt(e.target.previousElementSibling.innerText);
      let price = parseInt(e.target.parentElement.parentElement.previousElementSibling.lastElementChild.innerText);
      let subtotal = e.target.parentElement.parentElement.lastElementChild;
      
      qty++;
      price = qty * price ; 
      e.target.previousElementSibling.innerText = qty;
      subtotal.innerText = price;

      cartTotal();
      // let tot = parseInt(total.innerText.slice(1));
      // finalPrice = tot + price;
      // total.innerText = '$' + finalPrice ;
  }
}

item.addEventListener("click",dec);
function dec(e){
  if (e.target.classList.contains("product-subtract")){
    let qty = parseInt(e.target.nextElementSibling.innerText);
    if (qty === 0){
      e.target.nextElementSibling.innerText = 0;
    }
    else {
     let price = parseInt(e.target.parentElement.parentElement.previousElementSibling.lastElementChild.innerText);
    let subtotal = e.target.parentElement.parentElement.lastElementChild;

    qty--;
    price = qty * price;
    e.target.nextElementSibling.innerText = qty;
    subtotal.innerText = price; 

    cartTotal();
    //     let tot = parseInt(total.innerText.slice(1));
    // finalPrice = tot - price;
    // total.innerText = '$' + finalPrice ;
    }

    
    
  }
}