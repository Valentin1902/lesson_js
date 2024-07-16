
export const add_boosts = function (laptops) {
    const map_top_cart = laptops.map(({ name, price, availability, image, specs: { processor, ram, storage, display, graphics } }) => {
        return `<div class='card'>
    <img src="${image}">
    <h3 class="title">${name}</h3>
    <ul>
    <li>${processor}</li>
    <li>${ram}</li>
    <li>${storage}</li>
    <li>${display}</li>
    <li>${graphics}</li>
    </ul>
    <button class="buyBtn" ${!availability ? "disabled" : ""
            }><span class="text">${availability ? "Купити" : "Під замовлення"
            } <span>${price} грн</span></span><span class="icon">🛒</span></button></div>`
    }).join('')
    const goods_container = document.querySelector(".goods_container")
    goods_container.innerHTML = map_top_cart;
}

