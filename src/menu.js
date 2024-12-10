export function loadMenu(){
    const menu = document.createElement("h1");
    let breakfast_category = document.createElement("h2");
    let lunch_category = document.createElement("h2");
    const content = document.getElementById("content");
    const breakfastItems = [
        {
            name: "Item 1",
            price: "$10"
        },
        {
            name: "Item 2",
            price: "$10"
        },
        {
            name: "Item 3",
            price: "$10"
        }
    ]
    const lunchItems = [
        {
            name: "Item 1",
            price: "$10"
        },
        {
            name: "Item 2",
            price: "$10"
        },
        {
            name: "Item 3",
            price: "$10"
        }
    ]

    menu.innerHTML = "Our Menu";
    content.appendChild(menu);

    breakfast_category.innerHTML = "Breakfast";
    content.appendChild(breakfast_category);

    for (let [key, value] of Object.entries(breakfastItems)){
        const item = document.createElement("h3");
        item.innerHTML = value.name + " - " + value.price;
        content.appendChild(item);
    }

    lunch_category.innerHTML = "Lunch";
    content.appendChild(lunch_category);

    for (let [key, value] of Object.entries(lunchItems)){
        const item = document.createElement("h3");
        item.innerHTML = value.name + " - " + value.price;
        content.appendChild(item);
    }
}