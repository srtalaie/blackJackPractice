let possibleValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let suits = ["hearts", "diamonds", "spades", "clubs"];

function Cards(value, suit){
    this.value = value,
    this.suit = suit
}

let newCard = new Cards(possibleValues[(Math.floor(Math.random() * possibleValues.length))], suits[(Math.floor(Math.random() * suits.length))]);

function Dealer(card1, card2){
    this.total = 0;
    this.dealerCards = [card1, card2],
    this.shownCard = this.dealerCards[0],
    this.totalValue = function(){
      for(let i = 0; i < this.dealerCards.length; i++){
        this.total += this.dealerCards[i].value;
      }
      return this.total;
    }
    this.dealerHit = function(){
      let newCard = new Cards(possibleValues[(Math.floor(Math.random() * possibleValues.length))], suits[(Math.floor(Math.random() * suits.length))]);
      this.dealerCards.push(newCard)
    }
}

let initialDealerCard1 = new Cards(possibleValues[(Math.floor(Math.random() * possibleValues.length))], suits[(Math.floor(Math.random() * suits.length))]);
let initialDealerCard2 = new Cards(possibleValues[(Math.floor(Math.random() * possibleValues.length))], suits[(Math.floor(Math.random() * suits.length))]);

let dealer1 = new Dealer(initialDealerCard1, initialDealerCard2);

dealer1.dealerHit();
dealer1.totalValue();
console.log(dealer1.total, dealer1.dealerCards);


function checkDealerTotal(dealer){
    if(dealer.total === 21){
      return dealer.total;
    } else if(dealer.total >= 17 && dealer.total < 22){
      return dealer.total;
    } else if(dealer.total < 17){
      do {
        dealer.dealerHit();
        dealer.totalValue();
      } while (dealer.total < 17)
      return dealer.total;
    } else if (dealer.total <= 17 && dealer.dealerCards[0] === 11 || dealer.dealerCards[1] === 11){
      dealer.total = dealer.total - 10;
      do {
        dealer.dealerHit();
        dealer.totalValue();
        
      } while (dealer.total < 17)
      return dealer.total;
    }
}

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