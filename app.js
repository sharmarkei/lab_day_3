'use strict';

// Start

alert('Hello! Let\'s play a little game!');

// Get Player's Name

var user = prompt('First things first, What\'s you\'re name?');
console.log('user name: ', user);
alert('Thanks ' + user + '! Let\'s get started!');
var scoreCounter = 0;

// Five yes/no questions

function getToKnowMe() {
  var questions = ['Do I drink water?','Am I taller than 6 feet?','Do I workout?', 'Was I born in another country?', 'Does Apple make my favorite computer?'];
  var answers = ['YES', 'NO','NO', 'YES', 'YES'];
  var otherAnswers = ['Y', 'N', 'N', 'Y', 'Y'];

  for (var i = 0; i < questions.length; i++) {
    var askQuestions = prompt(questions[i]).toUpperCase();
    if(askQuestions === answers[i] || askQuestions === otherAnswers[i]) {
      alert('Correct, good job!');
      scoreCounter++;
    } else {
      alert('Sorry, that\'s incorrect!');
    }
  }
}
getToKnowMe();

  // First Multi Choice Game

function favoriteShoes() {
  var shoe = prompt('What is my favorite shoe brand?(Vans/Nike/Asics?)').toUpperCase();
  console.log('questionOne shoes:' + shoe);

  while (shoe != 'NIKE') {
    alert('Wrong! Try again');
    shoe = prompt('What is my favorite shoe brand?(Vans/Nike/Asics?)').toUpperCase();
  }
  alert('Correct!');
  scoreCounter++;
}
favoriteShoes();

// number game

function numberGame(){
  var num = Math.floor((Math.random()*20)+1);
  var counter = 1;
  var guesses;
  console.log('num gen:', num);

  while (guesses !==  num) {
    guesses = parseInt(prompt('What is the number I\'m thing about? 1-20'));
    if (guesses < num) {
      alert('Too Low!');
      counter++;
    } else if (guesses > num) {
      alert('Too High!');
      counter++;
    } else if (isNaN(guesses) || num === null) {
      alert('Enter your answer');
      counter++;
    }
    if (counter > 4) {
      alert('WRONG! The number was', num);
      break;
    }
  }
  if (guesses === num) {
    alert('We have a winner!');
    scoreCounter++;
    console.log('attempts:', counter);
  }
}
numberGame();

// Second Multi Choice Game

function multiChoice(){
  var houseArray = ['SEATTLE', 'TACOMA', 'BELLEVUE'];
  var house = prompt('What are my favorite cities in Washington?').toUpperCase();
  var first;
  /*loops that have conditions with array.length dependancies are prone to errors.
  This is because the length of the array can change, so in order to prevent that.
  Try this format
  for (var i = 0, l = houseArray.length; i < l; i++)
  l is defined as the length before it has a chance to change. If the length of the array
  changes, l will not change it's value with that, thus protecting the integrity and
  intended number of iterations :D
  */

  for (var i = 0; i < 6; i++) {
    console.log('houseArray:', houseArray[i]);

    if (houseArray.includes(house) ) {
      alert('One of my favorite cities!');
      scoreCounter++;
      first = true;
      break;
    }
  }
  if (!first) {
    alert('Nahh, that city sucks.');
  }
}
multiChoice();

// Rating Question

function rating() {
  while (game != 'AWESOME') {
    var game = prompt('How would you rate this game? (Bad? Okay? Awesome?)').toUpperCase();
    if (game === 'AWESOME') {
      alert('Correct!');
      scoreCounter++;
      break;
    } else {
      alert('Try again!');
    }
    console.log('answer game:' + game);
  }
}
rating();

alert('Thank you for playing my game ' + user + '!' + ' Your score is ' + scoreCounter + ' out of 9. Not too bad ');
