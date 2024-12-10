export function loadHome(){
    const name = document.createElement("h1");
    const image = document.createElement("img");
    const description = document.createElement("h2")
    const content = document.getElementById("content");

    name.innerHTML = "THE AMAZING ODIN RESTAURANT";
    image.src = "https://placehold.co/600x400";
    description.innerHTML = "Welcome to our restaurant! We have everything!";

    content.appendChild(name);
    content.appendChild(image);
    content.appendChild(description);
}