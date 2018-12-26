let Cards = require("./card.js");

// function Cards(value, suit){
//   this.value = value,
//   this.suit = suit
// }

//Create "deck" variables we will be using
let possibleValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let suits = ["hearts", "diamonds", "spades", "clubs"];

//Create Dealer object and its various actions
function Dealer(card1, card2){
  this.total = 0,
  this.dealerCards = [card1, card2],
  //Card dealer will be showing
  this.shownCard = this.dealerCards[0],
  this.totalValue = function(){
    this.total = 0;
    for(let i = 0; i < this.dealerCards.length; i++){
      this.total += this.dealerCards[i].value;
    }
    return this.total;
  }
  this.hitCounter = 0,
  this.dealerHit = function(){
    this.hitCounter = 0;
    let newCard = new Cards(possibleValues[(Math.floor(Math.random() * possibleValues.length))], suits[(Math.floor(Math.random() * suits.length))]);
    this.dealerCards.push(newCard)
    this.hitCounter++;
  }
}

//Intialize a new dealer
let initialDealerCard1 = new Cards(possibleValues[(Math.floor(Math.random() * possibleValues.length))], suits[(Math.floor(Math.random() * suits.length))]);
let initialDealerCard2 = new Cards(possibleValues[(Math.floor(Math.random() * possibleValues.length))], suits[(Math.floor(Math.random() * suits.length))]);

let dealer1 = new Dealer(initialDealerCard1, initialDealerCard2);

//Function to check dealer's total and execute various dealer actions based on that total
function checkDealerTotal(dealer){
  dealer.totalValue();
  if(dealer.total === 21){
    return dealer.total;
  } else if(dealer.total >= 17 && dealer.total < 22){
    return dealer.total;
  } else if(dealer.total < 17){
    let i = 0;
    do {
      dealer.dealerHit();
      dealer.totalValue();
      for(let x = 0; x < dealer.dealerCards.length; x++){
        if(dealer.dealerCards[x].value === 11 && dealer.total >= 22){
          dealer.dealerCards[x].value = 1;
          dealer.totalValue();
        } else {
          dealer.totalValue();
        }
      }
      i++;
    } while (dealer.total < 17)
    return dealer.total;
    i = 0;
  } else if(dealer.total <= 17 && dealer.dealerCards[0] === 11 || dealer.dealerCards[1] === 11){
    let i = 2;
    for(let x = 0; x < dealer.dealerCards.length; x++){
      if(dealer.dealerCards[x].value === 11){
        dealer.dealerCards[x].value = 1;
        dealer.totalValue();
      }
    }
    do {
      dealer.dealerHit();
      dealer.totalValue();
      for(let x = 0; x < dealer.dealerCards.length; x++){
        if(dealer.dealerCards[x].value === 11 && dealer.total >= 22){
          dealer.dealerCards[x].value = 1;
          dealer.totalValue();
        } else {
          dealer.totalValue();
        }
      }
      i++;
    } while (dealer.total < 17)
    return dealer.total;
    i = 2;
  } else if(dealer.dealerCards[0] === 11 && dealer.dealerCards[1] === 11){
    let i = 2;
    dealer.dealerCards[0].value = 1;
    do {
      dealer.dealerHit();
      dealer.totalValue();
      if(dealer.dealerCards[i].value === 11 && dealer.total >= 22){
        dealer.dealerCards[i].value = 1;
        dealer.totalValue();
        i++;
      } else {
        dealer.totalValue();
      }
    } while (dealer.total < 17)
    return dealer.total;
    i = 2;
  }
}


console.log(checkDealerTotal(dealer1), dealer1.hitCounter, dealer1.dealerCards)
// dealer1.totalValue;
// console.log(dealer1.total);