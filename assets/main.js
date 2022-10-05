const menuCate = document.querySelector('.menu__categorias')
const menuImg = document.getElementById("menuImg");
const exitMenuImg = document.getElementById("exitMenu");
const inputBuscador = document.getElementById("inputBuscador")
const btnBuscador = document.getElementById("buttonBuscador")
const cartItem = document.getElementById("cart")
const exitCartImg = document.getElementById("exit");
// carrito
const cartShow = document.querySelector('.cart');
const overlay = document.querySelector('.overlay');
// medios de pago
const promoBancaria = document.querySelector(".promociones-bancarias");
const exitPromo = document.querySelector(".exit-promo-banco")
const exitTodosMediosPago = document.querySelector(".exit-todos-medios-pago")
const imgPromoBanco = document.querySelector(".pago-uno")
const imgTodosMediosPagoUno = document.querySelector(".pago-dos")
const imgTodosMediosPagoDos = document.querySelector(".pago-tres")
const imgTodosMediosPagoTres = document.querySelector(".pago-cuatro")
const verPromoBanco = document.querySelector(".ver-uno")
const verMasPagosUno = document.querySelector(".ver-dos")
const verMasPagosDos = document.querySelector(".ver-tres")
const verMasPagosTres = document.querySelector(".ver-cuatro")
const mainHidden = document.querySelector(".main")

const productsModels = document.querySelector(".product__models")
const productsCategory = document.querySelector(".product__category")
const productsRecomendation = document.querySelector(".product__recomendation")
const productsDestacados = document.querySelector(".product__destacados")
const modelCard = document.querySelector(".models-container")
const categoryCard = document.querySelector(".category-container")
const menuItem = document.querySelector(".menu__categorias")
const menuItemFooter = document.querySelector(".category-footer")
const titleContainerModels = document.querySelector("#title-container-models")
const titleContainerCategory = document.querySelector("#title-container-category")


const productsCart = document.querySelector(".cart-container");
const total = document.querySelector('.total');
const subTotal = document.querySelector('.sub')
const buyBtn = document.querySelector('.btn-buy');

// todos los medios de pago
const todosMediosPago = document.querySelector(".medios-pago");



const showMenuCate = () => {
    menuImg.addEventListener('click', () =>{
        menuCate.classList.toggle("hide");
        overlay.classList.toggle('show-overlay')
        mainHidden.classList.toggle("hidden")
    })
    exitMenuImg.addEventListener('click', ()=>{
        menuCate.classList.toggle("hide");
        overlay.classList.remove('show-overlay')
        mainHidden.classList.toggle("hidden")
    }) 
}
const showPromoBanco = () => {
    imgPromoBanco.addEventListener('click', () =>{
        promoBancaria.classList.toggle("hide-promociones-bancarias");
        overlay.classList.toggle('show-overlay')
        mainHidden.classList.toggle("hidden")
    })
    verPromoBanco.addEventListener('click', () =>{
        promoBancaria.classList.toggle("hide-promociones-bancarias");
        overlay.classList.toggle('show-overlay')
        mainHidden.classList.toggle("hidden")
    })
    exitPromo.addEventListener('click', ()=>{
        promoBancaria.classList.toggle("hide-promociones-bancarias");
        overlay.classList.remove('show-overlay')
        mainHidden.classList.toggle("hidden")
    }) 
}
const showTodosMediosPago = () => {
    imgTodosMediosPagoUno.addEventListener('click', () =>{
        todosMediosPago.classList.toggle("hide-medios-pago");
        overlay.classList.toggle('show-overlay')
        mainHidden.classList.toggle("hidden")
    })
    imgTodosMediosPagoDos.addEventListener('click', () =>{
        todosMediosPago.classList.toggle("hide-medios-pago");
        overlay.classList.toggle('show-overlay')
        mainHidden.classList.toggle("hidden")
    })
    imgTodosMediosPagoTres.addEventListener('click', () =>{
        todosMediosPago.classList.toggle("hide-medios-pago");
        overlay.classList.toggle('show-overlay')
        mainHidden.classList.toggle("hidden")
    })
    verMasPagosUno.addEventListener('click', () =>{
        todosMediosPago.classList.toggle("hide-medios-pago");
        overlay.classList.toggle('show-overlay')
        mainHidden.classList.toggle("hidden")
    })
    verMasPagosDos.addEventListener('click', () =>{
        todosMediosPago.classList.toggle("hide-medios-pago");
        overlay.classList.toggle('show-overlay')
        mainHidden.classList.toggle("hidden")
    })
    verMasPagosTres.addEventListener('click', () =>{
        todosMediosPago.classList.toggle("hide-medios-pago");
        overlay.classList.toggle('show-overlay')
        mainHidden.classList.toggle("hidden")
    })
    exitTodosMediosPago.addEventListener('click', ()=>{
        todosMediosPago.classList.toggle("hide-medios-pago");
        overlay.classList.remove('show-overlay')
        mainHidden.classList.toggle("hidden")
    }) 
}

const showBuscador = () => {
    btnBuscador.addEventListener('click', () =>{
        if(inputBuscador.classList.contains("hide") == false){

        }
        else{
            inputBuscador.classList.toggle("hide")
        }
    })
}

const showCart = () => {
    cartItem.addEventListener('click', () =>{
        console.log("ENTRO")
        cartShow.classList.toggle("hideCart");
        overlay.classList.toggle('show-overlay')
    })
    exitCartImg.addEventListener('click', ()=>{
        console.log("ENTRO EXIT")
        cartShow.classList.toggle("hideCart");
        overlay.classList.remove('show-overlay')
    })
    
}


const slider = document.querySelector('#slider');

let sliderSection = document.querySelectorAll('.slider__section');

// variable para obtener el ultimo elemento del slider,para luego colocarlo en el inicio
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector('#btn--left');
const btnRight = document.querySelector('#btn--right');

slider.insertAdjacentElement('afterbegin', sliderSectionLast); /* Insertamos el ultimo elemento del slide despues de que empiece */


function Next(){
    let sliderSectionFirst = document.querySelectorAll('.slider__section')[0]; /* obtenemos el primer elemento */
    slider.style.marginLeft = '-200%';
    slider.style.transition = ' all 0.3s';
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderSectionFirst); /* enviamos el primer elemento al ultimo lugar */
        slider.style.marginLeft = '-100%';    
    }, 500);
}
function Back(){
    let sliderSection = document.querySelectorAll('.slider__section');
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = '0';
    slider.style.transition = ' all 0.5s';
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin', sliderSectionLast); /* enviamos el primer elemento al ultimo lugar */
        slider.style.marginLeft = '-100%';    
    }, 500);
}

btnRight.addEventListener('click', function(){
    Next();
});

btnLeft.addEventListener('click', function(){
    Back();
});


setInterval(function(){
    Next();
}, 5000);

// funcion para renderizar productos por modelo de auto elegido
const renderCard = product => {

    const{ id, price, description, cardImg} =  product;
    console.log("rendercard")
    return`
    <div class="cards">
    <div class="img">                        
        <img src="${cardImg}" alt="" class="img-card">
    </div>
    <div class="info-card">
        <h2 class="price">${price}</h2>
        <p class="description">${description}</p>
    </div>
    <div class="button">
        <button class="add-btn"
        data-id="${id}"
        data-description="${description}"
        data-img="${cardImg}"
        data-price="${price}">Agregar</button>
    </div>
</div>
    `
}
// Funcion para mostrar productos aleatoriamente
const renderProductsRandom = (contenedor,cantidad,funcionRender) => {
    // creamos un array para los productos random a promocionar
    productsListRandom = [];
    // ciclo para obtener los numeros-id aleatorios necesarios
    for (var i = 0; i < cantidad; i++) {
        var idRandom = Math.floor(Math.random()*productsData.length)
        // si el idrandom es repetido , volver a calcular hasta que no sea repetido
        while(productsListRandom.includes(productsData[idRandom]) == true){
            idRandom = Math.floor(Math.random()*productsData.length)
        }
        // agregamos el producto al array de productos random a promocionar
        productsListRandom.push(productsData[idRandom])
    }
    // pintamos en el html
    contenedor.innerHTML = productsListRandom.map(funcionRender).join("")

}


const renderModel = (model) => {
    const listaProductos = productsData.filter(p => p.model === model);
    productsModels.innerHTML = listaProductos.map(renderCard).join('');

};

const renderCategory = (categoriaPrincipal) => {
    
    const listaProductos = productsData.filter(p => p.categoriaPrincipal === categoriaPrincipal);
    productsCategory.innerHTML = listaProductos.map(renderCard).join('');

};
const renderCategorySecundary = (categoriaSecundaria) => {
    console.log("rendercategorysecundary")
    menuCate.classList.add("hide");
    overlay.classList.remove('show-overlay')
    mainHidden.classList.remove("hidden")
    const listaProductos = productsData.filter(p => p.categoriaSecundaria === categoriaSecundaria);
    productsCategory.innerHTML = listaProductos.map(renderCard).join('');

};

// const filterProducts = (e) => {
//     if(!e.target.classList.contains('model')) return;
//     console.log("ffilter")
//     renderModel(e.target.dataset.category,0)
// };
const filterProductsModel = (e) =>{
    if(!e.target.classList.contains('model')) return;
    // changeFilter(e);
    renderModel(e.target.dataset.model,0)
    titleContainerModels.innerHTML = "Repuestos de VW "+e.target.dataset.model

};
const filterProductsCategory = (e) =>{
    if(!e.target.classList.contains('category')) return;
    // changeFilter(e);
    renderCategory(e.target.dataset.category,0)
    titleContainerCategory.innerHTML = "Categoria "+e.target.dataset.category
};

const filterProductsCategorySecundary = (e) =>{
    if(!e.target.classList.contains('item')) return;
    // changeFilter(e);
    console.log("filtersecundary")
    console.log(e.target.dataset.secundaria)
    renderCategorySecundary(e.target.dataset.secundaria,0)
    titleContainerCategory.innerHTML = "Categoria "+e.target.dataset.secundaria

};


let cart = JSON.parse(localStorage.getItem('cart')) || [];

const saveLocalStorage = cartList => {
  localStorage.setItem('cart', JSON.stringify(cartList));
};

const renderCartProduct = cartProduct =>{
    const{ id, price, description, cardImg, quantity} =  cartProduct;
    return`
        <div class="product_cart">
            <div class="item-product">
                <img src="${cardImg}" alt="">
                <div class="product_cart--description">
                    <h2 class="title-card--cart">${description}</h2>
                    <span class="price"><span class="spacing-price">$</span>${price}</span>
                </div>
            </div>
            <div class="item-handler">
                <span class="quantity-handler down" data-id=${id}>-</span>
                <span class="item-quantity">${quantity}</span>
                <span class="quantity-handler up" data-id=${id}>+</span>
            </div>
        </div> 
    `

}
const renderCart = (cartList) => {
    if(!cartList.length){
        productsCart.innerHTML = `<p class="empty-msg"> No hay productos en el carrito</p>`;
        return;
    } 
    productsCart.innerHTML = cartList.map(renderCartProduct).join("");
}
// Suma de productos--------------------------------------------------------------------------------*
const showTotal = cartList =>{
    total.innerHTML = `$ ${cartList.reduce((acc, cur) => acc + Number(cur.price) * cur.quantity, 0)
    }`;
}
const showSub = cartList =>{
    subTotal.innerHTML = `$ ${cartList.reduce((acc, cur) => acc + Number(cur.price) * cur.quantity, 0)
    }`;
}
const disableBuyBtn = () =>{
    if (!cart.length) {
        buyBtn.classList.add('disabled')
    } else{
        buyBtn.classList.remove('disabled')
    }
}

// ! funcion de suma-------------------------------------!
const handleQuantity = e =>{
    // ! funcion down
     if (e.target.classList.contains('down')) {
        const existingCartItem = cart.find(item => item.id === e.target.dataset.id);
        if(existingCartItem.quantity === 1){
            if(window.confirm('¿ Desea eliminar el producto seleccionado ?')){
                cart = cart.filter(prod => prod.id !== existingCartItem.id);
                saveLocalStorage(cart);
                renderCart(cart);
                showSub(cart);
                showTotal(cart);
                disableBuyBtn();
                return
            }
        }
        cart = cart.map((item) =>{
            return item.id === existingCartItem.id
            ? {... item, quantity: Number(item.quantity) - 1}
            : item;
        });
        // ! funcion up
     } else if (e.target.classList.contains('up')){
        const existingCartItem = cart.find(item => item.id === e.target.dataset.id);
        cart = cart.map((item) =>{
            return item.id === existingCartItem.id
            ? {... item, quantity: Number(item.quantity) + 1}
            : item;
        });
     }
        saveLocalStorage(cart);
        renderCart(cart);
        showSub(cart);
        showTotal(cart);
        disableBuyBtn();
 }
// !------------------------------------------------------------!

const addProduct = (e) => {
    if(!e.target.classList.contains('add-btn')) return;
    const product = {
        id : e.target.dataset.id,
        name : e.target.dataset.name,
        description : e.target.dataset.description,
        price: e.target.dataset.price,
        cardImg: e.target.dataset.img,
    };
    // Variabl contadora para productos repetidos en el carrito

    const existingCartItem = cart.find(item => item.id === product.id);

    if(existingCartItem){
        cart = cart.map((item) => {
            return item.id === product.id
            ? { ... item, quantity: Number(item.quantity) + 1}
            : item;
        })
    } else {
        cart = [... cart, {... product, quantity : 1}];
    }

    saveLocalStorage(cart);
    renderCart(cart);
    showSub(cart);
    showTotal(cart);
    disableBuyBtn();
}
// ---------------------------------------------------------------------------------------------------*

const completeBuy = () => {
    if (!cart.length) return;
    if (window.confirm('¿Desea finalizar su compra?')) {
        localStorage.removeItem('cart');
        window.location.reload();
    }
};




const init = () =>{
    document.addEventListener('DOMContentLoaded', showTotal(cart));
    document.addEventListener('DOMContentLoaded', showSub(cart));
    document.addEventListener('DOMContentLoaded', renderCart(cart));
    document.addEventListener('DOMContentLoaded', renderModel);
    document.addEventListener('DOMContentLoaded', renderCategory);
    document.addEventListener('DOMContentLoaded', renderCategorySecundary);
    // console.log(productsData)
    document.addEventListener('DOMContentLoaded', renderProductsRandom(productsRecomendation,8,renderCard));
    document.addEventListener('DOMContentLoaded', renderProductsRandom(productsDestacados,8,renderCard));
    productsModels.addEventListener('click', addProduct);
    productsRecomendation.addEventListener('click',addProduct)
    productsDestacados.addEventListener('click', addProduct);
    productsCategory.addEventListener('click',addProduct)
    productsCart.addEventListener('click', handleQuantity);
    showCart()
    showBuscador()
    showMenuCate()
    showPromoBanco()
    showTodosMediosPago()
    modelCard.addEventListener("click",filterProductsModel)
    categoryCard.addEventListener("click",filterProductsCategory)
    menuItem.addEventListener("click",filterProductsCategorySecundary)
    menuItemFooter.addEventListener("click",filterProductsCategorySecundary)
    disableBuyBtn();
    buyBtn.addEventListener('click', completeBuy);
}

init()
