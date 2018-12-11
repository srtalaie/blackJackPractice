let possibleValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let suits = ["hearts", "diamonds", "spades", "clubs"];

function Cards(value, suit){
    this.value = value,
    this.suit = suit
}

let card1 = new Cards(possibleValues[(Math.floor(Math.random() * 11))], suits[(Math.floor(Math.random() * 5))]);
let card2 = new Cards(possibleValues[(Math.floor(Math.random() * 11))], suits[(Math.floor(Math.random() * 5))]);
console.log(card1.value, card1.suit, card2.value);