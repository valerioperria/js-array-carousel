// Array d'immagini
const images = ["./img/01.jpg", "./img/02.jpg", "./img/03.jpg", "./img/04.jpg", "./img/05.jpg"];

const itemElem = document.querySelector(".items");

let image = "";

// Ciclo for per creare un elemento immagine per ogni elemento dell'array
for (let i = 0; i < images.length; i++) {
    const curImage = images[i];
    image += `<div class="item"><img src="${curImage}" alt=""></div>`;
}

console.log(image);

// Inserimento in html
itemElem.innerHTML += image;

// selezioniamo tutte le immagini
const imageElem = document.querySelectorAll(".item");
console.log(imageElem);

// visualizza la prima immagine
let visImage = 0;
imageElem[visImage].classList.add("active");

// bottone giù
document.querySelector(".next").addEventListener("click", function (event) {
    event.preventDefault();
    if (visImage < imageElem.length - 1) {
        imageElem[visImage].classList.remove("active");
        visImage++;
        imageElem[visImage].classList.add("active");
    }
})

// bottone su
document.querySelector(".prev").addEventListener("click", function (event) {
    event.preventDefault();
    if (visImage > 0) {
        imageElem[visImage].classList.remove("active");
        visImage--;
        imageElem[visImage].classList.add("active");
    }
})





