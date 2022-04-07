let cards = ["lara.webp", "lara.webp", "juju.webp", "juju.webp", "Jorel2.webp", "Jorel2.webp", "Seu_edson.webp", "Seu_edson.webp", "Nico.webp", "Nico.webp", "magal.png", "magal.png", "Gesonel.jpg", "Gesonel.jpg"]
let pastCard = "";
let ncards = 0;
let jogadas = 0;
let acertos = 0;
let time = 0;
let replay;
let pastInner;
let curretCardInner;

function clickCard(el) {
    el.querySelector(":scope .front-face").classList.add("front-flip");
    el.querySelector(":scope .back-face").classList.add("back-flip");
    jogadas++;
    if (jogadas % 2 == 0) {
        if (myCard.innerHTML == el.innerHTML) {
            acertos++;
        } else {
            (el.querySelector(":scope .front-face").classList.remove("front-flip"));
            myCard.querySelector(":scope .front-face").classList.remove("front-flip");
            el.querySelector(":scope .back-face").classList.remove("back-flip");
            myCard.querySelector(":scope .back-face").classList.remove("back-flip");
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
        `<div class='card' onclick="clickCard(this)">
            <div class="front-face face">
            </div>
            <div class="back-face face">
                <img src="img/${card}">
            </div>
        </div>`);
}

function timer(){
    time = setInterval(1000);
    console.log(time)
}

getCards();
timer();