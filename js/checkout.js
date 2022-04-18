if(document.readyState == "laoding"){
    document.addEventListener("DOMContentLoaded", ready)
} else{
    ready();
}

function ready() {


    cartImport();
    // //cart change item quantity
    // var quantityInputs = document.getElementsByClassName("quantity");
    // for (var i = 0 ; i < quantityInputs.length ; i++){
    //     var input = quantityInputs[i];
    //     input.addEventListener("change", quantityChanged)
    // }

    // //cart add item
    // var addToCartButton = document.querySelector(".add-cart");
    // addToCartButton.addEventListener("click" , addToCartClicked)

    // document.querySelector("btn-checkout").addEventListener("click" , checkoutClicked);
    
  

}

//functions

function cartImport(){
    //cart show 
    var cartTitles = [];
    var cartPrices = [];
    var cartQuantity = [];
    var cartImages = [];

    cartTitles = JSON.parse(localStorage.getItem("cartTitles"));
    cartPrices = JSON.parse(localStorage.getItem("cartPrices"));
    cartQuantity = JSON.parse(localStorage.getItem("cartQuantity"));
    cartImages = JSON.parse(localStorage.getItem("cartImages"));

    


    for ( var i = 0 ; i <cartPrices.length ; i++){
        addItemToCart(cartTitles[i], cartPrices[i], cartQuantity[i], cartImages[i]);
        

    };

    
}


function addItemToCart(product_title, product_price, product_quantity, product_img){
    

    var cartRow = document.createElement("tr");
    
    cartRow.innerHTML=`
                            <td><img class="remove-btn" src="../images/trash.png"></td>
                            <td>${product_img}</td>
                            <td><p class="product-name">${product_title}</p></td>
                            <td><p class="product-price">${product_price+"$"}</p></td>
                            <td><input class="product-quantity" id="id_form-0-quantity" min="1" name="form-0-quantity" value="1" type="number"></td>
                            <td><p class="product-total">200$</p></td>
                    `
    var cartList = document.querySelector("tbody");
    cartList.append(cartRow);

    var imgElement = document.querySelector(".item-img");
    imgElement.classList.remove("item-img");
    imgElement.classList.add("product-img")
    
    
    var quantityElement = document.querySelector(".product-quantity");
    quantityElement.value = product_quantity;
    
   
    cartRow.getElementsByClassName("remove-btn")[0].addEventListener("click" , removeCartItem);
    cartRow.getElementsByClassName("product-quantity")[0].addEventListener("change", quantityChanged);
    
    updateRowTotal();
    updateCartTotal();
    calculateShipping();
    
}


function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    var titleToRemove = buttonClicked.parentElement.parentElement.querySelector(".product-name").innerHTML;
    console.log(titleToRemove);

    var cartTitles = JSON.parse(localStorage.getItem("cartTitles"));
    var cartPrices = JSON.parse(localStorage.getItem("cartPrices"));
    var cartQuantity = JSON.parse(localStorage.getItem("cartQuantity"));
    var cartImages = JSON.parse(localStorage.getItem("cartImages"));
                     
                     
                     
    for ( var i = 0 ; i < cartTitles.length ; i++ ){
        if(cartTitles[i] === titleToRemove)
            {
                cartTitles.splice(i,1);
                cartPrices.splice(i,1);
                cartQuantity.splice(i,1);
                cartImages.splice(i,1);
            }
    };

    localStorage.setItem("cartTitles",JSON.stringify(cartTitles));
    localStorage.setItem("cartPrices",JSON.stringify(cartPrices));
    localStorage.setItem("cartQuantity",JSON.stringify(cartQuantity));
    localStorage.setItem("cartImages",JSON.stringify(cartImages));
    empty(cartTitles);
    updateCartTotal();
    calculateShipping();
    
}


function quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <=0){
        input.value = 1;
    }
    updateRowTotal();
    updateCartTotal();
    calculateShipping();
    
}

function updateCartTotal(){
    var cartItemContainer = document.querySelector("tbody");
    var cartRows = cartItemContainer.getElementsByTagName("tr");
    var total = 0;
    for ( var i = 0 ; i< cartRows.length ; i++){
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName("product-price")[0];
        var quantityElement = cartRow.getElementsByClassName("product-quantity")[0];
        
        var price = priceElement.innerHTML;
        var quantity = quantityElement.value;
        price = parseFloat(price.replace("$" , ""));
        

        total = total + (price * quantity);
    }
    total = Math.round(total * 100 ) / 100;

    document.getElementsByClassName("sub-total")[0].innerHTML = total+"$";
    

}

function updateRowTotal() {
    var cartItemContainer = document.querySelector("tbody");
    var cartRows = cartItemContainer.getElementsByTagName("tr");
    var total = 0;
    for ( var i = 0 ; i< cartRows.length ; i++){
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName("product-price")[0];
        var quantityElement = cartRow.getElementsByClassName("product-quantity")[0];
        var price = priceElement.innerHTML;
        var quantity = quantityElement.value;
        price = parseFloat(price.replace("$" , ""));
        total = (price * quantity);
        total = Math.round(total * 100 ) / 100;
        document.getElementsByClassName("product-total")[i].innerHTML = total+"$";
    }
    
    
}


function calculateShipping(){
    var shippingElement = document.querySelector(".sub-shipping");
    var subTotalElement = document.querySelector(".sub-total");
    
    var shippingprice = parseFloat(subTotalElement.innerHTML);
    shippingprice = Math.round(shippingprice * 15) / 100;
    shippingElement.innerHTML = shippingprice+"$";
    calculateFullTotal()
}

function calculateFullTotal(){
    var fullTotal = document.querySelector(".total");
    var shippingElement = document.querySelector(".sub-shipping");
    var subTotalElement = document.querySelector(".sub-total");
    var total = parseFloat(subTotalElement.innerHTML.replace("$","")) + parseFloat(shippingElement.innerHTML.replace("$",""))
    fullTotal.innerHTML = total;
    
}

function empty(cartTitles){
    var cartTitles = cartTitles;
    var emptyMsg = document.querySelector(".no-item");
    if(cartTitles.length === 0){
        emptyMsg.classList.remove("hide");
    }
}
//cart remove item
var removeCartItemButtons = document.getElementsByClassName("remove-btn");

for (var i = 0 ; i < removeCartItemButtons.length ; i++){
    var removeButton = removeCartItemButtons[i];
    removeButton.addEventListener("click" , removeCartItem)
}
    

