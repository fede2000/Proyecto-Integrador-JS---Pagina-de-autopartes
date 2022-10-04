const menuCate = document.querySelector('.menu__categorias')
const menuImg = document.getElementById("menuImg");
const exitMenuImg = document.getElementById("exitMenu");
const inputBuscador = document.getElementById("inputBuscador")
const btnBuscador = document.getElementById("buttonBuscador")
const cartItem = document.getElementById("cart")
const exitCartImg = document.getElementById("exit");
// carrito
const cart = document.querySelector('.cart');
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
const modelCard = document.querySelector(".models-container")
const listModel = document.querySelectorAll(".cards-model")
const titleContainerModels = document.querySelector("#title-container-models")

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
        cart.classList.toggle("hideCart");
        overlay.classList.toggle('show-overlay')
    })
    exitCartImg.addEventListener('click', ()=>{
        console.log("ENTRO EXIT")
        cart.classList.toggle("hideCart");
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


const renderModel = (model) => {
    
    const listaProductos = productsData.filter(p => p.model === model);
    productsModels.innerHTML = listaProductos.map(renderCard).join('');

};

// const filterProducts = (e) => {
//     if(!e.target.classList.contains('model')) return;
//     console.log("ffilter")
//     renderModel(e.target.dataset.category,0)
// };
const filterProducts = (e) =>{
    if(!e.target.classList.contains('model')) return;
    // changeFilter(e);
    renderModel(e.target.dataset.model,0)
    titleContainerModels.innerHTML = "Repuestos de VW "+e.target.dataset.model

};



const init = () =>{
    document.addEventListener('DOMContentLoaded', renderModel);
    showCart()
    showBuscador()
    showMenuCate()
    showPromoBanco()
    showTodosMediosPago()
    modelCard.addEventListener("click",filterProducts)
}

init()
