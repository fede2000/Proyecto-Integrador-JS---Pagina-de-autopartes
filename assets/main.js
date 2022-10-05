// ---------- menu -------------
const menuCate = document.querySelector('.menu__categorias')
// boton abrir
const menuImg = document.getElementById("menuImg");
// boton cerrar
const exitMenuImg = document.getElementById("exitMenu");
// -----------------------------

// ---------- buscador ---------
const inputBuscador = document.getElementById("inputBuscador")
const btnBuscador = document.getElementById("buttonBuscador")
// -----------------------------

// ---------- carrito ---------
const cartItem = document.getElementById("cart")
// boton abrir
const cartShow = document.querySelector('.cart');
// boton cerrar
const exitCartImg = document.getElementById("exit");
const overlay = document.querySelector('.overlay');
// contenedor de productos del carrito
const productsCart = document.querySelector(".cart-container");
// total precio de productos
const total = document.querySelector('.total');
// subtotal precio de productos
const subTotal = document.querySelector('.sub')
// boton comprar
const buyBtn = document.querySelector('.btn-buy');

// ----------------------------

// ---------- medios de pago ----

// div paga en coutas
const imgPromoBanco = document.querySelector(".pago-uno")
// div tarjeta de debito
const imgTodosMediosPagoUno = document.querySelector(".pago-dos")
// div efectivo
const imgTodosMediosPagoDos = document.querySelector(".pago-tres")
// div mas medios de pago
const imgTodosMediosPagoTres = document.querySelector(".pago-cuatro")
// abrir paga en coutas
const verPromoBanco = document.querySelector(".ver-uno")
// abrir tarjetas de debito
const verMasPagosUno = document.querySelector(".ver-dos")
// abrir efectivo
const verMasPagosDos = document.querySelector(".ver-tres")
// abrir mas medios de pago
const verMasPagosTres = document.querySelector(".ver-cuatro")
// contenedor promociones bancarias absolute
const promoBancaria = document.querySelector(".promociones-bancarias");
// contenedor todos los medios de pago absolute
const todosMediosPago = document.querySelector(".medios-pago");
// boton salir promos bancos
const exitPromo = document.querySelector(".exit-promo-banco")
// boton salir otros medios de pago
const exitTodosMediosPago = document.querySelector(".exit-todos-medios-pago")

// quitar scroll del main al abrir medios de pago
const mainHidden = document.querySelector(".main")

// ----------------------------------

// -----------models-----------------
const productsModels = document.querySelector(".product__models")
const modelCard = document.querySelector(".models-container")
const titleContainerModels = document.querySelector("#title-container-models")
// ----------------------------------

// -----------category---------------
const productsCategory = document.querySelector(".product__category")
const categoryCard = document.querySelector(".category-container")
const titleContainerCategory = document.querySelector("#title-container-category")
// ----------------------------------

// -----------product recomendation---------
const productsRecomendation = document.querySelector(".product__recomendation")
// -----------product destacados -----------
const productsDestacados = document.querySelector(".product__destacados")

// menu footer
const menuItem = document.querySelector(".menu__categorias")
const menuItemFooter = document.querySelector(".category-footer")

// ------------slider---------
const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider__section');
// boton slider izquierdo
const btnLeft = document.querySelector('#btn--left');
// boton slider derecho
const btnRight = document.querySelector('#btn--right');


// ______________________________________ funciones _______________________________

// -------LOCAL STORAGE -----------------
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const saveLocalStorage = cartList => {
  localStorage.setItem('cart', JSON.stringify(cartList));
};


// funcion para mostrar el menu de categorias
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

// funcion para mostrar las promociones de pago
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
// funcion para mostrar todos los medios de pago
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

// funcion para mostrar buscador
const showBuscador = () => {
    btnBuscador.addEventListener('click', () =>{
        if(inputBuscador.classList.contains("hide") == false){
        }
        else{
            inputBuscador.classList.toggle("hide")
        }
    })
}

// funcion para mostrar carrito
const showCart = () => {
    cartItem.addEventListener('click', () =>{
        cartShow.classList.toggle("hideCart");
        overlay.classList.toggle('show-overlay')
    })
    exitCartImg.addEventListener('click', ()=>{
        cartShow.classList.toggle("hideCart");
        overlay.classList.remove('show-overlay')
    })
    
}

// -------------------------seccion slider---------------------------------------

// variable para obtener el ultimo elemento del slider,para luego colocarlo en el inicio
let sliderSectionLast = sliderSection[sliderSection.length - 1];

slider.insertAdjacentElement('afterbegin', sliderSectionLast); /* Insertamos el ultimo elemento del slide despues de que empiece */
// funcion para mostrar el slider siguiente
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
// duncion para mostrar el slider anterior
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

// ----------------------------------------finaliza seccion slider ----------------------

// funcion para renderizar card de productos
const renderCard = product => {
    // desestructuramos el producto
    const{ id, price, description, cardImg} =  product;
    return`
    <div class="cards">
    <div class="img">                        
        <img src="${cardImg}" alt="" class="img-card">
    </div>
    <div class="info-card">
        <h2 class="price">$${price}</h2>
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
// ------------------------------ seccion productos por modelo ----------------
// funcion para renderizar productos por modelo de auto sleccionado
const renderModel = (model) => {
    const listaProductos = productsData.filter(p => p.model === model);
    productsModels.innerHTML = listaProductos.map(renderCard).join('');
};

// funcion para filtrar productos por modelo
const filterProductsModel = (e) =>{
    if(!e.target.classList.contains('model')) return;
    // changeFilter(e);
    renderModel(e.target.dataset.model,0)
    titleContainerModels.innerHTML = "Repuestos de VW "+e.target.dataset.model

};
// ---------------------------------------------------------------------------

// ------------------------------ seccion productos por categoria-------------
// funcion para renderizar productos por categoria seleccionada
const renderCategory = (categoriaPrincipal) => {
    const listaProductos = productsData.filter(p => p.categoriaPrincipal === categoriaPrincipal);
    productsCategory.innerHTML = listaProductos.map(renderCard).join('');
};

// funcion para filtrar productos por categoria
const filterProductsCategory = (e) =>{
    if(!e.target.classList.contains('category')) return;
    // changeFilter(e);
    renderCategory(e.target.dataset.category,0)
    titleContainerCategory.innerHTML = "Categoria "+e.target.dataset.category
};
// ----------------------------------------------------------------------------

// ------------------------------- seccion productos por categoria secundaria ---------

// funcion para renderizar productos por categoria secunsaria seleccionada desde el menu de categorias
const renderCategorySecundary = (categoriaSecundaria) => {
    menuCate.classList.add("hide");
    overlay.classList.remove('show-overlay')
    mainHidden.classList.remove("hidden")
    const listaProductos = productsData.filter(p => p.categoriaSecundaria === categoriaSecundaria);
    productsCategory.innerHTML = listaProductos.map(renderCard).join('');
};

// funcion para filtrar productos por categoria secundaria
const filterProductsCategorySecundary = (e) =>{
    if(!e.target.classList.contains('item')) return;
    // changeFilter(e);
    renderCategorySecundary(e.target.dataset.secundaria,0)
    titleContainerCategory.innerHTML = "Categoria "+e.target.dataset.secundaria

};
// ----------------------------------------------------------------------------------------

// ----------------------------------seccion carrito---------------------------------------
// funcion para renderizar  card de productos en el carrito
const renderCartProduct = cartProduct =>{
    // desestructuramos el producto
    const{ id, price, description, cardImg, quantity} =  cartProduct;
    return`
        <div class="product_cart">
            <div class="item-product">
                <img src="${cardImg}" alt="">
                <div class="product_cart--description">
                    <h2 class="title_card--cart">${description}</h2>
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
// funcion para renderizar contenido en el carrito
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
// funcion agregar-restar producto en el carrito
const handleQuantity = e =>{
    // funcion restar producto
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
        // funcion sumar producto
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

// funcion para agregar producto al carrito
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
// funcion para finalizar comprar
const completeBuy = () => {
    if (!cart.length) return;
    if (window.confirm('¿Desea finalizar su compra?')) {
        localStorage.removeItem('cart');
        window.location.reload();
    }
};
// --------------------------------------------- finaliza seccion carrito--------------------




const init = () =>{
    // al iniciar la pagina cargar desde el local storage al carrito
    document.addEventListener('DOMContentLoaded', showTotal(cart));
    document.addEventListener('DOMContentLoaded', showSub(cart));
    document.addEventListener('DOMContentLoaded', renderCart(cart));
    // -------------------------------------------------------------
    document.addEventListener('DOMContentLoaded', renderModel);
    document.addEventListener('DOMContentLoaded', renderCategory);
    document.addEventListener('DOMContentLoaded', renderCategorySecundary);
    document.addEventListener('DOMContentLoaded', renderProductsRandom(productsRecomendation,8,renderCard));
    document.addEventListener('DOMContentLoaded', renderProductsRandom(productsDestacados,8,renderCard));

    // -----------seccion producto por modelo -----------------
    // agregar productos por modelo
    productsModels.addEventListener('click', addProduct);
    // filtrar producto por modelo
    modelCard.addEventListener("click",filterProductsModel)
    // --------------------------------------------------------

    // -----------seccion producto por categoria --------------
    // agregar productos por categoria
    productsCategory.addEventListener('click',addProduct)
    // filtrar producto por categoria
    categoryCard.addEventListener("click",filterProductsCategory)
    // --------------------------------------------------------

    // agregar productos recomendados
    productsRecomendation.addEventListener('click',addProduct)
    // agregar productos destacados
    productsDestacados.addEventListener('click', addProduct);
    // sumar o restar producto en el carrito
    productsCart.addEventListener('click', handleQuantity);
    // finalizar compra
    buyBtn.addEventListener('click', completeBuy);
    
    
    menuItem.addEventListener("click",filterProductsCategorySecundary)
    menuItemFooter.addEventListener("click",filterProductsCategorySecundary)
    
    showCart()
    showBuscador()
    showMenuCate()
    showPromoBanco()
    showTodosMediosPago()
    disableBuyBtn();
}

init()
