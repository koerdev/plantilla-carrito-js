const carrito = [
    {
        id: 1,
        nombre: "Pokemon Azul",
        precio: 9.99,
        moneda: "EUR",
        imagen: "./img/pokemon-azul.jpg",
        cantidad: 1,
    },
    {
        id: 2,
        nombre: "Pokemon Rojo",
        precio: 7.99,
        moneda: "EUR",
        imagen: "./img/pokemon-rojo.jpg",
        cantidad: 1,
    },
    {
        id: 3,
        nombre: "Pokemon Verde",
        precio: 6.99,
        moneda: "EUR",
        imagen: "./img/pokemon-verde.jpg",
        cantidad: 1,
    },
    {
        id: 4,
        nombre: "Pokemon Plata",
        precio: 19.99,
        moneda: "EUR",
        imagen: "./img/pokemon-plata.jpg",
        cantidad: 1,
    },
    {
        id: 5,
        nombre: "Pokemon Oro",
        precio: 19.99,
        moneda: "EUR",
        imagen: "./img/pokemon-oro.jpg",
        cantidad: 1,
    },
    {
        id: 6,
        nombre: "Sonic",
        precio: 6.99,
        moneda: "EUR",
        imagen: "./img/sonic.jpg",
        cantidad: 1,
    },
];

// Renderizar cada una de las card del array de objetos
const cardItems = document.querySelector('.cardItem');

let card = "";

carrito.forEach((item) => {
    card += `
        <div class="card col-lg-3 mb-4">
            <img src="${item.imagen}" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${item.nombre}</h5>
                <p class="card-text">
                    Some quick example text to build on the card title and make up
                    the bulk of the card’s content.
                </p>
            </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">$ ${item.precio}</li>

                </ul>
            <div class="card-body">
                <a href="#" class="btn btn-primary addToCart">Agregar</a>
            </div>
        </div>
    `;
});

cardItems.innerHTML = card;

// Capturar todos los botones para luego agregarle un evento click
const productCart = document.querySelectorAll('.addToCart');

productCart.forEach(button => {
    button.addEventListener("click", catchProduct);
});

function catchProduct(e) {
    const button = e.target;
    const item = button.closest('.card');
    let title = item.querySelector('.card-title').textContent;
    let price = item.querySelector('.list-group-item').textContent;
    let image = item.querySelector('.card-img-top').src;

    // Se crea una funcion para agregar los elementos
    addItemCart(title, price, image);
};

const addCartProduct = document.querySelector('.shopping-cart-items');

function addItemCart(title, price, image) {
    const addCartRow = document.createElement('div');
    const shoppItemTemplate = `
        <div class="row shoppingCartItem">
            <div class="col-6">
                <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                    <img src='${image}' class="shopping-cart-image">
                    <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ms-3 mb-0">${title}
                    </h6>
                </div>
            </div>
            <div class="col-2">
                <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                    <p class="item-price mb-0 shoppingCartItemPrice">${price}</p>
                </div>
            </div>
            <div class="col-4">
                <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                    <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number" value="1">
                    <button class="btn btn-danger buttonDelete" type="button">X</button>
                </div>
            </div>
        </div>
    `;

    addCartRow.innerHTML = shoppItemTemplate;
    addCartProduct.append(addCartRow);
};