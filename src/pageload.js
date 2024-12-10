export function pageLoad(){
    const newH1 = document.createElement("h1");
    const newImg = document.createElement("img");
    const newP = document.createElement("p")
    const content = document.getElementById("content");

    newH1.innerHTML = "THE AMAZING ODIN RESTAURANT";
    newImg.src = "https://placehold.co/600x400";
    newP.innerHTML = "Welcome to our restaurant! We have everything!";

    content.appendChild(newH1);
    content.appendChild(newImg);
    content.appendChild(newP);
}