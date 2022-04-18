const header = document.createElement("header");
header.innerHTML = `
    <div class="nav-bar-main">
    <div class="container">
    <div class="nav-bar-sec1">
        <img class="box" href="../images/akar-icons_shipping-box-01.png">
        <p class="shipping-free">Free Shipping for order over 500$</p>
    </div>
    <nav class="nav-bar-sec2">
        <ul class="nav-elements">
            <li class="nav-element"><a href="../html/index.html" class="nav-bar-link">Home</a></li>
            <li class="nav-element"><a href="../html/about-us.html" class="nav-bar-link">About Us</a></li>
            <li class="nav-element"><a href="../html/contact-us.html" class="nav-bar-link">Contact Us</a></li>
            <li class="nav-element"><a href="../html/login.html" class="nav-bar-link">Help Center</a></li>
            <li class="nav-element"><a href="#" class="nav-bar-link">Call Us 06606666</a></li>
        </ul>
    </nav>
    </div>
    </div>
    <div class="search-bar-main">
    <div class="container">
        <div class="search-bar-sec1">
            <div class="logo">
                <img href="../images/OIP.png">
            </div>
            <div class="search-bar">
                <label class="search-field">
                    <input type="email/" required/>
                    <span class="placeholder">Search your products....</span>
                </label>
                <div class="search-bar-logo-place">
                    <img src="../images/akar-icons_search.png" class="search-bar-logo">
                </div>
            </div>
        </div>
        <!-- AFC: MY Account - My Favorites - My Cart -->
        <div class="AFC">
            <nav class="AFC-nav">
                <ul class="AFC-nav-elements">
                    <li class="AFC-nav-element account"><img src="../images/codicon_account.png" alt="account" class="AFC_icone"><a href="profile.html">My Account</a></li>
                    <li class="AFC-nav-element cart"><img src="../images/bi_cart.png" alt="cart" class="AFC_icone">My Cart</li>
                </ul>
            </nav>
        </div>
    </div>
    </div>
    <div class="menu">
    <div class="links container">
        <ul class="menu-elements">
            <li class="menu-element"><a href="../html/shop-all.html" class="menu-links" >Shop All</a></li>
            <li class="menu-element" ><a href="../html/computers.html" class="menu-links" >Computers</a></li>
            <li class="menu-element" ><a href="../html/tablets.html" class="menu-links" >Tablets</a></li>
            <li class="menu-element"><a href="../html/drones.html" class="menu-links" >Drones</a></li>
            <li class="menu-element"><a href="../html/mobile.html" class="menu-links" >Mobile</a></li>
            <li class="menu-element"><a href="../html/wearabale.html" class="menu-links" >Wearable tech</a></li>
            <li class="menu-element"><a href="../html/sale.html" class="menu-links" >Sale</a></li>
        </ul>
    </div>
    </div>

`;

const footer = document.createElement("footer");
footer.innerHTML = `

<div class="footer-content">

    <div class="footer-sec">
        <h1 class="sec-title">Store Location</h1>
        <ul class="sec-elements">
            <li class="sec-element">360S Ouargla,Algeria</li>
            <li class="sec-element">info@Techouse.com</li>
            <li class="sec-element">+213666983624</li>
        </ul>
        <ul class="sec-icones">
            <li class="icone-links"><a href="#" class="footer-links"><i class="fa-brands fa-facebook-square"></i></a></li>
            <li class="icone-links"><a href="#" class="footer-links"><i class="fa-brands fa-instagram"></i></a></li>
            <li class="icone-links"><a href="#" class="footer-links"><i class="fa-brands fa-youtube"></i></a></li>
        </ul>
    </div>

    <div class="footer-sec">
        <h1 class="sec-title">Shop</h1>
        <ul class="sec-elements">
            <li class="sec-element"><a href="#" class="footer-links">Shop All</a></li>
            <li class="sec-element"><a href="#" class="footer-links">Computers</a></li>
            <li class="sec-element"><a href="#" class="footer-links">Tablets</a></li>
            <li class="sec-element"><a href="#" class="footer-links">Drones</a></li>
            <li class="sec-element"><a href="#" class="footer-links">Smart Phones</a></li>
            <li class="sec-element"><a href="#" class="footer-links">Wearable Tech</a></li>
            <li class="sec-element"><a href="#" class="footer-links">Sales</a></li>
        </ul>
    </div>
    <div class="footer-sec">
        <h1 class="sec-title">Customer Support</h1>
        <ul class="sec-elements">
            <li class="sec-element"><a href="#" class="footer-links">Contacy Us</a></li>
            <li class="sec-element"><a href="#" class="footer-links">help Center</a></li>
            <li class="sec-element"><a href="#" class="footer-links">About Us</a></li>
        </ul>
    </div>

    <div class="footer-sec">
        <h1 class="sec-title">Policy</h1>
        <ul class="sec-elements">
            <li class="sec-element"><a href="#" class="footer-links">Shipping and Returns</a></li>
            <li class="sec-element"><a href="#" class="footer-links">FAQ</a></li>
            <li class="sec-element"><a href="#" class="footer-links">Payment Mehods</a></li>
            <li class="sec-element"><a href="#" class="footer-links">Terms and Conditions</a></li>
        </ul>
    </div>
    
</div>
`;

document.body.append(footer);
document.body.prepend(header);