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

module.exports = Dealer;