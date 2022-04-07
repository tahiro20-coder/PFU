const cart_btn = document.querySelector(".cart");
const cart_sidebar = document.querySelector(".cart-sidebar");
const cart_close = document.querySelector(".cart-close");

cart_btn.addEventListener("click" , () => {
    cart_sidebar.style.right = "0";
})

cart_close.addEventListener("click" , () => {
    cart_sidebar.style.right = "-500px";
})