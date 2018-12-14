//Create "deck" variables we will be using
let possibleValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let suits = ["hearts", "diamonds", "spades", "clubs"];

//Create the card object to be used for both player's cards and dealer's cards
function Cards(value, suit){
    this.value = value,
    this.suit = suit
}

//Create Dealer object and its various actions
function Dealer(card1, card2){
    this.total = 0;
    this.dealerCards = [card1, card2],
    //Card dealer will be showing
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

//Intialize a new dealer
let initialDealerCard1 = new Cards(possibleValues[(Math.floor(Math.random() * possibleValues.length))], suits[(Math.floor(Math.random() * suits.length))]);
let initialDealerCard2 = new Cards(possibleValues[(Math.floor(Math.random() * possibleValues.length))], suits[(Math.floor(Math.random() * suits.length))]);

let dealer1 = new Dealer(initialDealerCard1, initialDealerCard2);

//Function to check dealer's total and execute various dealer actions based on that total
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