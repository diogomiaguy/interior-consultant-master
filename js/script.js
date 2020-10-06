const navlinks = document.querySelector("nav")
const btnhamburguer = document.querySelector(".btn-hamburguer")
const body = document.querySelector("body")

btnhamburguer.addEventListener("click", function () {
    btnhamburguer.classList.toggle("change");
    navlinks.classList.toggle("activemenu");
    body.classList.toggle("scroll");
})


// const closeModal = document.querySelector(".close-modal")



// for( let card of cards){
//   card.addEventListener("click", function(){

//     const cardTitulo = card.querySelector(".card-titulo").textContent
//     const cardNomeChef = card.querySelector(".card-nome-chef").textContent
//     const cardImagem = card.querySelector(".card-imagem").innerHTML

//     modalOverlay.classList.add("active")    

//     modalOverlay.querySelector(".modal-imagem").innerHTML = cardImagem
//     modalOverlay.querySelector(".modal-titulo").textContent = cardTitulo    
//     modalOverlay.querySelector(".modal-nome-chef").textContent = cardNomeChef
//   })  
// }

// closeModal.addEventListener("click", function(){
//   modalOverlay.classList.remove("active")

// })