let Cards = require("./card");
let Dealer = require("./blackJackDealer");
let Player = require("./blackJackPlayer");

//Create "deck" variables we will be using
const possibleValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const suits = ["hearts", "diamonds", "spades", "clubs"];


$(document).ready(function(){
  //Intialize a new dealer
  let initialDealerCard1 = new Cards(possibleValues[(Math.floor(Math.random() * possibleValues.length))], suits[(Math.floor(Math.random() * suits.length))]);
  let initialDealerCard2 = new Cards(possibleValues[(Math.floor(Math.random() * possibleValues.length))], suits[(Math.floor(Math.random() * suits.length))]);

  let dealer = new Dealer(initialDealerCard1, initialDealerCard2);

  //Intialize a new player
  let initialPlayerCard1 = new Cards(possibleValues[(Math.floor(Math.random() * possibleValues.length))], suits[(Math.floor(Math.random() * suits.length))]);
  let initialPlayerCard2 = new Cards(possibleValues[(Math.floor(Math.random() * possibleValues.length))], suits[(Math.floor(Math.random() * suits.length))]);

  let player = new Player(initialPlayerCard1, initialPlayerCard2);

  //Game Start
  $("#start").on('click', function(){
    $('.player').html(`<p>${player.playerCards[0].value} of ${player.playerCards[0].suit}</p><p>${player.playerCards[1].value} of ${player.playerCards[1].suit}</p>`);
  });

  //Hit button
  $('#player-hit').on('click', function(){
    player.playerHit();
    $('.player').html(` `);
    player.playerCards.forEach( card => {
      $('.player').append(`<p>${card.value} of ${card.suit}</p>`);
    });
  });

  //Stand button
  $('#player-stand').on('click', function(){
    player.totalValue();
    $('.player-total').html(`<p>Player Total: ${player.total}</p>`);
    $('.dealer-total').html(`<p>Dealer Total: ${checkDealerTotal(dealer)}</p>`);
    dealer.dealerCards.forEach( card => {
      $('.dealer').append(`<p>${card.value} of ${card.suit}</p>`);
    });
  });
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