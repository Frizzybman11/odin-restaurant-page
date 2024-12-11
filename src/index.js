import "./styles.css";
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';
const Home = document.getElementById("Home");
const Menu = document.getElementById("Menu");
const Contact = document.getElementById("Contact");
const content = document.getElementById("content");

loadHome();
Home.addEventListener("click", function (e) {
    content.innerHTML = "";
    loadHome();
})

Menu.addEventListener("click", function (e) {
    content.innerHTML = "";
    loadMenu();
})

Contact.addEventListener("click", function (e) {
    content.innerHTML = "";
    loadContact();
})