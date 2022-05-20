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

var item = document.getElementById("shopping-cart--list");

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