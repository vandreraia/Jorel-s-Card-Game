let cards = ["lara.webp", "lara.webp", "juju.webp", "juju.webp", "Jorel2.webp", "Jorel2.webp", "Seu_edson.webp", "Seu_edson.webp", "Nico.webp", "Nico.webp", "magal.png", "magal.png", "Gesonel.jpg", "Gesonel.jpg"]
let myCard;
let ncards = 0;
let jogadas = 0;
let acertos = 0;
let replay;

function clickCard(el) {
    el.classList.add("front-flip");
    jogadas++;
    if (jogadas % 2 == 0) {
        if (myCard.innerHTML == el.innerHTML) {
            acertos++;
        } else {
            setTimeout(el.classList.remove("front-flip"), 1000);
            setTimeout(myCard.classList.remove("front-flip"), 1000);
            console.log("false");
        }
    }
    if (acertos == ncards / 2){
        alert(`Você ganhou em ${jogadas} jogadas!`)
        replay = prompt("gostaria de começar de novo?")
        jogadas = 0;
        acertos = 0;
        if (replay == "sim"){
            //getCards();
        }
    }
    myCard = el;
}

function getCards() {
    ncards = prompt("Com quantas cartas deseja jogar? (escolha entre 2 e 14(apenas numeros pares))");

    while (ncards % 2 != 0 || ncards > 14 || ncards < 4) {
        ncards = prompt("Escolha um numero par entre 4 e 14");
    }

    cards = cards.slice(0, ncards);
    cards.sort(comparador)
    for (let i = 0; i < ncards; i++) {
        addCards(cards[i]);
    }
}

function comparador() {
    return Math.random() - 0.5;
}

function addCards(card) {
    let el = document.querySelector(".cards");
    el.insertAdjacentHTML("beforeend",
        `<div class='card'>
    <div class="front-face face" onclick="clickCard(this)">
    <div class="back-face face">
        <img src="img/${card}">
    </div></div></div>`);
}

getCards();