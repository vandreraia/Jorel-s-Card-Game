getCards();

function getCards(){
    let cards = prompt ("Com quantas cartas deseja jogar? (escolha entre 2 e 14(apenas numeros pares))");
    
    while (cards % 2 != 0){
        cards = prompt ("Escolha numero par");    
    }

    while (cards > 0){
        addCards();
        cards -= 2;
    }
}

function addCards(){
    let el = document.querySelector(".cards.top");
    el.insertAdjacentHTML("beforeend", "<div class='card'></div>");
    el = document.querySelector(".cards.bot");
    el.insertAdjacentHTML("beforeend", "<div class='card'></div>");
}