let possibleValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let suits = ["hearts", "diamonds", "spades", "clubs"];

function Cards(value, suit){
    this.value = value,
    this.suit = suit
}

let newCard = new Cards(possibleValues[(Math.floor(Math.random() * possibleValues.length))], suits[(Math.floor(Math.random() * suits.length))]);

console.log(newCard);

function Dealer(card1, card2){
    this.dealerCards = [card1, card2],
    this.shownCard = this.dealerCards[0],
    this.totalValue = this.dealerCards.reduce((a, b) => { return a.value + b.value }),
    this.dealerHit = function(){
      let newCard = new Cards(possibleValues[(Math.floor(Math.random() * possibleValues.length))], suits[(Math.floor(Math.random() * suits.length))]);
      this.dealerCards.push(newCard)
    }
}

let initialDealerCard1 = new Cards(possibleValues[(Math.floor(Math.random() * possibleValues.length))], suits[(Math.floor(Math.random() * suits.length))]);
let initialDealerCard2 = new Cards(possibleValues[(Math.floor(Math.random() * possibleValues.length))], suits[(Math.floor(Math.random() * suits.length))]);

let dealer1 = new Dealer(initialDealerCard1, initialDealerCard2);
console.log(dealer1.totalValue, dealer1.dealerCards);

dealer1.dealerHit();

console.log(dealer1.totalValue, dealer1.dealerCards, dealer1.dealerCards.reduce((a, b) => a.value + b.value ));

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