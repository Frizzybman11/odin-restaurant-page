export function loadHome(){
    const name = document.createElement("h1");
    const image = document.createElement("img");
    const description = document.createElement("h2")
    const about = document.createElement("p");
    const content = document.getElementById("content");

    name.innerHTML = "THE AMAZING ODIN RESTAURANT";
    image.src = "https://placehold.co/600x400";
    description.innerHTML = "Welcome to our restaurant! We're delighted to have you here!";
    about.innerHTML = "At the Amazing Odin, we bring you a dining experience like no other. Whether you're here to enjoy a casual meal, celebrate a special occasion, or explore new tastes, our menu has something for everyone. Blending delicious flavors, fresh ingredients, and exceptional service, we strive to make your visit unforgettable!"
    about.id = "about"
    

    content.appendChild(name);
    content.appendChild(image);
    content.appendChild(description);
    content.appendChild(about)
}