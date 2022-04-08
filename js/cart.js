if(document.readyState == "laoding"){
    document.addEventListener("DOMContentLoaded", ready)
} else{
    ready();
}

function ready() {

    //cart remove item
    var removeCartItemButtons = document.getElementsByClassName("remove-btn");

    for (var i = 0 ; i < removeCartItemButtons.length ; i++){
        var removeButton = removeCartItemButtons[i];
        removeButton.addEventListener("click" , removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName("quantity");
    for (var i = 0 ; i < quantityInputs.length ; i++){
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged)
    }

    var addToCarButton = document.querySelector(".add-cart");
    addToCarButton.addEventListener("click" , addToCartClicked)

    // document.querySelector("btn-checkout").addEventListener("click" , checkoutClicked);
    
}

//functions
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

function quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <=0){
        input.value = 1;
    }
    updateCartTotal();
}

function addToCartClicked(event){
    var button = event.target;
    var product_right = button.parentElement.parentElement.parentElement
    var priceElement = product_right.querySelector(".bs-price");
    var priceArray = priceElement.innerText.split(" ");
    var product_price;
    if(priceArray.length>1)
        product_price = parseFloat(priceArray[1].replace("$" , ""));
    else
        product_price = parseFloat(priceArray[0].replace("$" , ""));

    var product_img = document.querySelector("picture").innerHTML;
    var product_title = document.querySelector(".main-title").innerText;
    var product_quantity = document.querySelector(".quantity-product").value;
    
    
    addItemToCart(product_title, product_price, product_quantity, product_img);
    addItemToLocalStorage(product_title, product_price, product_quantity, product_img);
    updateCartTotal();
}

function addItemToCart(product_title, product_price, product_quantity, product_img){
    var cartItemNames = document.getElementsByClassName("item-title");
    for( var i = 0; i< cartItemNames.length; i++){
        if(cartItemNames[i].innerText == product_title);
            alert("This item is already added to cart");
            return;
    }
    var cartRow = document.createElement("div");
    cartRow.className = "cart-item";
    cartRow.innerHTML= `<div class="item">
                        <div class="product-img">
                            ${product_img}
                        </div>
                        <div class="item-content">
                            <div class="item-title">${product_title}</div>
                            <div class="item-price">${product_price+"$"}</div>
                            <div class="item-quantity"><input class="quantity" id="id_form-0-quantity" min="1" name="form-0-quantity" value="1" type="number"></div>
                        </div>
                    </div>
                    <div class="remove-item"><img class="remove-btn" src="../images/remove-icone.png"></div>`;
    var cartList = document.querySelector(".cart-list");
    cartList.append(cartRow);
    var quantityElement = document.querySelector(".quantity");
    quantityElement.value = product_quantity;
    
   
    
    //slide the cart again
    const cart_sidebar = document.querySelector(".cart-sidebar");
    cart_sidebar.style.right = "0";

    // var btn_remove = document.getElementsByClassName("remove-btn");
    // for (var i = 0; i < btn_remove.length;i++){
    //     var remove = btn_remove[i];
    //     remove.addEventListener("click" , removeCartItem);
    // }
    cartRow.getElementsByClassName("remove-btn")[0].addEventListener("click" , removeCartItem);
    cartRow.getElementsByClassName("quantity")[0].addEventListener("change", quantityChanged);

}


function addItemToLocalStorage(product_title, product_price, product_quantity, product_img){
    var cartTitles = [];
    var cartPrices = [];
    var cartQuantity = [];
    var cartImages = [];
    var cartNofItems = JSON.parse(localStorage.getItem("cartTitles"));
    
    if(cartNofItems === null)
        {
            cartTitles = product_title;
            cartPrices = product_price;
            cartQuantity = product_quantity;
            cartImages = product_img;

            localStorage.setItem("cartTitles",JSON.stringify(cartTitles));
            localStorage.setItem("cartPrices",JSON.stringify(cartPrices));
            localStorage.setItem("cartQuantity",JSON.stringify(cartQuantity));
            localStorage.setItem("cartImages",JSON.stringify(cartImages));
        }
    else
        {   
            var length = cartNofItems.length;
            console.log(cartNofItems);
            cartTitles[length] = product_title;
            cartPrices[length]  = product_price;
            cartQuantity[length]  = product_quantity;
            cartImages[length]  = product_img;

            localStorage.setItem("cartTitles",JSON.stringify(cartTitles));
            localStorage.setItem("cartPrices",JSON.stringify(cartPrices));
            localStorage.setItem("cartQuantity",JSON.stringify(cartQuantity));
            localStorage.setItem("cartImages",JSON.stringify(cartImages));
        }

    
}


function checkoutClicked(){
    alert("nice");

}
//cart Slide
const cart_btn = document.querySelector(".cart");
const cart_sidebar = document.querySelector(".cart-sidebar");
const cart_close = document.querySelector(".cart-close");

cart_btn.addEventListener("click" , () => {
    cart_sidebar.style.right = "0";
})

cart_close.addEventListener("click" , () => {
    cart_sidebar.style.right = "-700px";
})



function updateCartTotal(){
    var cartItemContainer = document.querySelector(".cart-list");
    var cartRows = cartItemContainer.getElementsByClassName("cart-item");
    var total = 0;
    for ( var i = 0 ; i< cartRows.length ; i++){
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName("item-price")[0];
        var quantityElement = cartRow.getElementsByClassName("quantity")[0];
        var priceArray = priceElement.innerText.split(" ");
        var price;
        var quantity = quantityElement.value;
        if(priceArray.length>1)
            price = parseFloat(priceArray[1].replace("$" , ""));
        else
            price = parseFloat(priceArray[0].replace("$" , ""));

        total = total + (price * quantity);
    }
    total = Math.round(total * 100 ) / 100;

    document.getElementsByClassName("total-price")[0].innerHTML = total+"$";

}