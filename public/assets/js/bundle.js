(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Cards = require("./card");
let Dealer = require("./blackJackDealer");
let Player = require("./blackJackPlayer");

//Create "deck" variables we will be using
const possibleValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const suits = ["hearts", "diamonds", "spades", "clubs"];



//Game Start
$("#start").on('click', function(){
  //Intialize a new dealer
  let initialDealerCard1 = new Cards(possibleValues[(Math.floor(Math.random() * possibleValues.length))], suits[(Math.floor(Math.random() * suits.length))]);
  let initialDealerCard2 = new Cards(possibleValues[(Math.floor(Math.random() * possibleValues.length))], suits[(Math.floor(Math.random() * suits.length))]);

  let dealer = new Dealer(initialDealerCard1, initialDealerCard2);

  //Intialize a new player
  let initialPlayerCard1 = new Cards(possibleValues[(Math.floor(Math.random() * possibleValues.length))], suits[(Math.floor(Math.random() * suits.length))]);
  let initialPlayerCard2 = new Cards(possibleValues[(Math.floor(Math.random() * possibleValues.length))], suits[(Math.floor(Math.random() * suits.length))]);

  let player = new Player(initialPlayerCard1, initialPlayerCard2);

  $('#player').html(`<p>${player.playerCards[0]}</p><p>${player.playerCards[1]}</p>`);
  // $('#dealer').html(`<p>${dealer.dealerCards[0]}</p><p>${dealer.dealerCards[1]}</p>`);
});

//Functions
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
},{"./blackJackDealer":2,"./blackJackPlayer":3,"./card":4}],2:[function(require,module,exports){
let Cards = require("./card.js");

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

module.exports = Dealer;
},{"./card.js":4}],3:[function(require,module,exports){
let Cards = require("./card.js");

//Create "deck" variables we will be using
let possibleValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let suits = ["hearts", "diamonds", "spades", "clubs"];

//Create Dealer object and its various actions
function Player(card1, card2){
    this.playerBet = bet,
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
},{"./card.js":4}],4:[function(require,module,exports){
//Create the card object to be used for both player's cards and dealer's cards
function Cards(value, suit){
    this.value = value,
    this.suit = suit
}

module.exports = Cards;
},{}]},{},[1]);
