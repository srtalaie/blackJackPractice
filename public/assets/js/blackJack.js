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

    this.dealerCards = [initialDealerCard1, initialDealerCard2],
    this.shownCard = this.dealerCards[0],
    this.totalValue = this.dealerCards.reduce((a, b) => a + b),
    this.dealerHit = function(){
        let newCard = new Cards(possibleValues[(Math.floor(Math.random() * possibleValues.length))], suits[(Math.floor(Math.random() * suits.length))]);
        this.dealerCards.push(newCard)
    }
}

let dealer1 = new Dealer();
console.log(dealer1.totalValue, dealer1.initialCards);

// if(this.totalValue <= 17 && this.dealerCards[0] === 11 || this.dealerCards[1] === 11){
//     this.totalValue = this.totalValue - 10;
//     let newCard = new Cards(possibleValues[(Math.floor(Math.random() * possibleValues.length))], suits[(Math.floor(Math.random() * suits.length))]);
//     this.dealerCards.push(newCard);
//     return this.totalValue;
// } else if(this.totalValue < 17){
//     let newCard = new Cards(possibleValues[(Math.floor(Math.random() * possibleValues.length))], suits[(Math.floor(Math.random() * suits.length))]);
//     this.dealerCards.push(newCard);
//     return this.totalValue;
// } else if(this.totalValue >= 17 && this.totalValue < 22){
//     return this.totalValue;
// } else if(this.totalValue > 21){
//     return this.totalValue;
// }