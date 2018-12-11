let possibleValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let suits = ["hearts", "diamonds", "spades", "clubs"];

function Cards(value, suit){
    this.value = value,
    this.suit = suit
}

let newCard = new Cards(possibleValues[(Math.floor(Math.random() * possibleValues.length))], suits[(Math.floor(Math.random() * suits.length))]);

console.log(newCard);

function Dealer(){
    let initialDealerCard1 = new Cards(possibleValues[(Math.floor(Math.random() * possibleValues.length))], suits[(Math.floor(Math.random() * suits.length))]);
    let initialDealerCard2 = new Cards(possibleValues[(Math.floor(Math.random() * possibleValues.length))], suits[(Math.floor(Math.random() * suits.length))]);

    this.initialCards = [initialDealerCard1, initialDealerCard2],
    this.shownCard = this.initialCards[0],
    this.totalValue = this.initialCards[0].value + this.initialCards[1].value
}

let dealer1 = new Dealer();
console.log(dealer1.totalValue, dealer1.initialCards);