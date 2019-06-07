const about = document.querySelector(".mid");
const shop = document.querySelector(".left");
const contact = document.querySelector(".right");
const aboutLink = document.querySelector("#die1");
const shopLink = document.querySelector("#die2");
const contactLink = document.querySelector("#die3");
const contain = document.querySelector(".container");
const contactPage = document.querySelector("#contact");
const shopPage = document.querySelector("#shopShow");
const aboutPage = document.querySelector("#about");

let showContact = false;
let showShop = false;
let showAbout = false;

function toggleAbout() {
  if (!showAbout) {
    about.removeAttribute("id");
    shop.removeAttribute("id");
    contact.removeAttribute("id");
    contain.removeAttribute("id");
    aboutLink.removeAttribute("class");
    shopLink.removeAttribute("class");
    contactLink.removeAttribute("class");
    contactPage.setAttribute("id", "contact");
    showContact = false;
    about.setAttribute("id", "slide1");
    shop.setAttribute("id", "slide1");
    contact.setAttribute("id", "slide1");
    contain.setAttribute("id", "slide1");
    aboutLink.className = "link";
    shopLink.className = "link";
    contactLink.className = "link";
    aboutPage.removeAttribute("id");
    shopPage.setAttribute("id", "shopShow");
    showShop = false;
    showAbout = true;
  } else {
    about.removeAttribute("id");
    shop.removeAttribute("id");
    contact.removeAttribute("id");
    contain.removeAttribute("id");
    aboutLink.removeAttribute("class");
    shopLink.removeAttribute("class");
    contactLink.removeAttribute("class");
    aboutPage.setAttribute("id", "about");
    showAbout = false;
  }
}

function toggleShop() {
  if (!showShop) {
    about.removeAttribute("id");
    shop.removeAttribute("id");
    contact.removeAttribute("id");
    contain.removeAttribute("id");
    aboutLink.removeAttribute("class");
    shopLink.removeAttribute("class");
    contactLink.removeAttribute("class");
    contactPage.setAttribute("id", "contact");
    showContact = false;
    about.setAttribute("id", "slide1");
    shop.setAttribute("id", "slide1");
    contact.setAttribute("id", "slide1");
    contain.setAttribute("id", "slide1");
    aboutLink.className = "link";
    shopLink.className = "link";
    contactLink.className = "link";
    shopPage.removeAttribute("id");
    aboutPage.setAttribute("id", "about");
    showShop = true;
  } else {
    about.removeAttribute("id");
    shop.removeAttribute("id");
    contact.removeAttribute("id");
    contain.removeAttribute("id");
    aboutLink.removeAttribute("class");
    shopLink.removeAttribute("class");
    contactLink.removeAttribute("class");
    shopPage.setAttribute("id", "shopShow");
    showShop = false;
  }
}

function toggleContact() {
  if (!showContact) {
    about.removeAttribute("id");
    shop.removeAttribute("id");
    contact.removeAttribute("id");
    contain.removeAttribute("id");
    aboutLink.removeAttribute("class");
    shopLink.removeAttribute("class");
    contactLink.removeAttribute("class");
    shopPage.setAttribute("id", "shopShow");
    showShop = false;
    about.setAttribute("id", "slide1");
    shop.setAttribute("id", "slide1");
    contact.setAttribute("id", "slide1");
    contain.setAttribute("id", "slide1");
    aboutLink.className = "link";
    shopLink.className = "link";
    contactLink.className = "link";
    contactPage.removeAttribute("id");
    aboutPage.setAttribute("id", "about");

    showContact = true;
  } else {
    about.removeAttribute("id");
    shop.removeAttribute("id");
    contact.removeAttribute("id");
    contain.removeAttribute("id");
    aboutLink.removeAttribute("class");
    shopLink.removeAttribute("class");
    contactLink.removeAttribute("class");
    contactPage.setAttribute("id", "contact");
    showContact = false;
  }
}

contact.addEventListener("click", toggleContact);
shop.addEventListener("click", toggleShop);
about.addEventListener("click", toggleAbout);
