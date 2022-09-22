const menuCate = document.querySelector('.menu__categorias')
const menuImg = document.getElementById("menuImg");
const exitMenuImg = document.getElementById("exitMenu");
const inputBuscador = document.getElementById("inputBuscador")
const btnBuscador = document.getElementById("buttonBuscador")
const cartItem = document.querySelector(".item-card");
const exitCartImg = document.getElementById("exitCart");
// carrito
const cartMenu = document.querySelector('.cart');


const showMenuCate = () => {
    menuImg.addEventListener('click', () =>{
        menuCate.classList.toggle("hide");
        // overlay.classList.toggle('show-overlay')
    })
    exitMenuImg.addEventListener('click', ()=>{
        menuCate.classList.toggle("hide");
        // overlay.classList.remove('show-overlay')
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

// const showCart = () => {
//     cartItem.addEventListener('click', () =>{
//         console.log("ENTRO")
//         cartMenu.classList.toggle("hide");
//         // overlay.classList.toggle('show-overlay')
//     })
//     exitCartImg.addEventListener('click', ()=>{
//         cartMenu.classList.toggle("hide");
//         // overlay.classList.remove('show-overlay')
//     })
    
// }



showBuscador()
// showMenuCate()
// showCart()