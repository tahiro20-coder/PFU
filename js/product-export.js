"use strict";

const init = function(e) {
    //clear local storage
    localStorage.removeItem("details");
    localStorage.removeItem("img");
    localStorage.removeItem("price");
    localStorage.removeItem("position");

    //get each element
    var item = document.querySelectorAll(".item-link");
    var item_details = document.getElementsByClassName("details");
    var item_img = document.getElementsByTagName("picture");
    var item_price = document.getElementsByClassName("bs-price");
    var details = [];
    var img = [];
    var price = [];
    var i=0;

    item.forEach(item => {
        item.addEventListener("click", ()=>{
            let position = item.getAttribute("name");
            localStorage.setItem("position", JSON.stringify(position));
        })
    })

    while(i<item.length){
        
      
        details[i] = item_details[i].innerHTML,
        img[i] = item_img[i].innerHTML,
        price[i] = item_price[i].innerHTML
        
        
        localStorage.setItem("details",JSON.stringify(details));
        localStorage.setItem("img",JSON.stringify(img));
        localStorage.setItem("price",JSON.stringify(price));
    
        i++;
    };
      
 
    

};


document.addEventListener('DOMContentLoaded' , function(){init();});