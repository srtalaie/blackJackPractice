let Cards = require("./card.js");

//Create "deck" variables we will be using
let possibleValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let suits = ["hearts", "diamonds", "spades", "clubs"];

//Create Dealer object and its various actions
function Player(card1, card2){
    this.total = 0,
    this.playerCards = [card1, card2],
    //Card player will be showing
    this.shownCard = this.playerCards[0],
    this.totalValue = function(){
      this.total = 0;
      for(let i = 0; i < this.playerCards.length; i++){
        this.total += this.playerCards[i].value;
      }
      return this.total;
    }
    this.hitCounter = 0,
    this.canDouble = true,
    this.playerHit = function(){
      this.hitCounter = 0;
      let newCard = new Cards(possibleValues[(Math.floor(Math.random() * possibleValues.length))], suits[(Math.floor(Math.random() * suits.length))]);
      this.playerCards.push(newCard)
      this.hitCounter++;
    }
    this.playerDouble = function(){
        if(canDouble){
            if(this.playerCards[0].value === 11 || this.playerCards[1] === 11){
                this.playerHit()
                this.totalValue();
                this.total = this.total - 10;
            
            } else {
                this.playerHit();
                this.totalValue();
            }

        this.canDouble = false;
        }
  }
}

module.exports = Player;