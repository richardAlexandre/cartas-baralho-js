let idBaralho = 0;
let carta = document.querySelector('#carta')
let btnTrocar = document.queryCommandEnabled('#btntrocar')

fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then(Response =>Response.json()).then(dado => idBaralho = dado.deck_id);


 let proximaCarta = () => {
    fetch(`https://deckofcardsapi.com/api/deck/${idBaralho}/draw/?count=1`).then(Response => Response.json()).then(dado => carta.innerHTML = `<img src = ${dado.cards[0].image}>`);
 }

addEventListener('click',proximaCarta);