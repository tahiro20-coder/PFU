"use strict";

const init = function(e) {
    
    
    const product_title = document.querySelector(".product-title");
    const main_title = document.querySelector(".main-title");
    const prodcut_img = document.querySelector("picture");
    const prodcut_price = document.querySelector(".bs-price");
    
    
    var details =JSON.parse(localStorage.getItem("details"));
    var img =JSON.parse(localStorage.getItem("img"));
    var price =JSON.parse(localStorage.getItem("price"));
    const position =JSON.parse(localStorage.getItem("position"));

    
    product_title.innerHTML = "Home / " + details[position];
    main_title.innerHTML = details[position];
    prodcut_img.innerHTML = img[position];
    prodcut_price.innerHTML = price[position];
    

    
};


document.addEventListener('DOMContentLoaded' , function(){init();});