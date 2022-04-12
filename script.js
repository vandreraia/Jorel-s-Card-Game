let ncards = 0;
let acertos = 0;
let seconds = 0;
let minutes = 0;
let pastCard = '';
let jogadas = 0;

function clickCard(currentCard) {
    if (!currentCard.classList.contains("virado")) {
        currentCard.classList.add("virado");
        currentCard.querySelector(":scope .front-face").classList.add("front-flip");
        currentCard.querySelector(":scope .back-face").classList.add("back-flip");
        setTimeout(soColoqueiIssoPraDarTimeOut, 1000, currentCard);
    }    
}

function soColoqueiIssoPraDarTimeOut(currentCard){
    jogadas++;
    if (jogadas % 2 == 0) {
        if (pastCard.innerHTML == currentCard.innerHTML) {
            acertos++;
        } else {
            currentCard.querySelector(":scope .front-face").classList.remove("front-flip");
            currentCard.querySelector(":scope .back-face").classList.remove("back-flip");
            pastCard.querySelector(":scope .front-face").classList.remove("front-flip");
            pastCard.querySelector(":scope .back-face").classList.remove("back-flip");
            pastCard.classList.remove("virado");
            currentCard.classList.remove("virado");
        }
    }
    
    if (acertos == ncards / 2) {
        alert(`Você ganhou em ${jogadas} jogadas, e ${minutes} minutos e ${seconds} segundos!`);
        let replay = prompt("gostaria de começar de novo?")
        jogadas = 0;
        acertos = 0;
        minutes= 0;
        seconds = 0;
        if (replay == "sim") {
            document.querySelector(".cards").innerHTML = "";
            getCards();
        }
    }
    pastCard = currentCard;
}   

function getCards() {
    let cards = ["lara.webp", "lara.webp", "juju.webp", "juju.webp", "Jorel2.webp", "Jorel2.webp", "Seu_edson.webp", "Seu_edson.webp", "Nico.webp", "Nico.webp", "magal.png", "magal.png", "Gesonel.jpg", "Gesonel.jpg"]
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

function timer() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes ++;
    }
    if (seconds < 10){
        seconds = `0${seconds}`
    }
    document.querySelector("h2").innerHTML = `${minutes} : ${seconds}`;
}

getCards();
setInterval(timer, 1000);