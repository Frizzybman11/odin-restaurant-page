export function loadContact(){
    const contact = document.createElement("h1");
    const phone = document.createElement("h2");
    const email = document.createElement("h2");
    const content = document.getElementById("content");

    contact.innerHTML = "Contact Us";
    content.appendChild(contact);

    phone.innerHTML = "Phone: 123-456-7890";
    content.appendChild(phone);

    email.innerHTML = "Email: odin@restuarant.com";
    content.appendChild(email);
}