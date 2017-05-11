'use strict'

  // Start

alert('Hello! Let\'s play a little game!');

// Get Player's Name
function fiveQuestions(){
  var user = prompt('First things first, What\'s you\'re name?');
  console.log('user name:' + user);
  alert('Thanks ' + user + ' ! Let\'s get started!');

  //first question add counter to something
  var shoe = prompt('What is my favorite shoe brand?(Vans/Nike/Asics?)').toUpperCase();

  console.log('questionOne shoes:' + shoe);

  while (shoe != 'NIKE') {
    alert('Wrong! Try again');
    var shoe = prompt('What is my favorite shoe brand?(Vans/Nike/Asics?)').toUpperCase();
  }
  alert('Correct!');

  // Second Question

  var drink = prompt('Do I drink water?').toUpperCase();
  console.log('choice drink:' + drink);

  if (drink === 'Y' || drink === 'YES') {
    alert('Only when I\'m not sleeping');
  } else {
    alert('How are you alive if you don\'t?!');
  }

    // Third Question

  var height = prompt('Am I taller than 6 feet?').toUpperCase();
  console.log('my height:' + height);

  if (height === 'Y' || height === 'YES') {
    alert('Only if I keep drinking my milk!');
  } else if (height === 'N' || height === 'NO') {
    alert('Yeaaa, I\'m just an average joe');
  } else {
    alert('Dude, only answer Y/N');
  }

    // Fourth Question
function goodName(){
  var comupterChoice = ['MAC', 'MACBOOK', 'MAC BOOK', 'MACBOOK PRO', 'APPLE', 'MAC BOOK PRO'];
  var computer = prompt('What kinda computer do I prefer?').toUpperCase();
  var flag;

  for (var i = 0; i < comupterChoice.length; i++) {
    console.log('computerChoice:', comupterChoice[i]);

    if(computer === comupterChoice[i]) {
      alert('Apple squad!');
      flag = true;
      break;
    }
  }
  if (!flag){
   alert('PC\'s are extinct.');
  }
}
goodName();


  // Fifth Question
  var workout = prompt('Do I workout?').toUpperCase();
  console.log('my workout:' + workout);

  if(workout === 'Y' || workout === 'YES') {
    alert('That\'s going to change now that CF started');
  } else {
    alert('Yea, I like that sedentary lifestyle.');
  }
}

fiveQuestions();

// Misc. question
function what(){
  while (game != 'AWESOME') {
    var game = prompt("How would you rate this game? (Bad? Okay? Awesome?)").toUpperCase();
    if(game === 'AWESOME'){
      alert('Correct!');
      break;
    }else{
       alert('Try again!');
    }
    console.log('answer game:' + game);
  }
}
what();

//multiple choice question
function multiChoice(){
  var houseArray = ['SEATTLE', 'TACOMA', 'BELLEVUE'];
  var house = prompt('What are my favorite cities in Washington?').toUpperCase();
  var first;

  for (var i = 0; i < houseArray.length; i++) {
    console.log('houseArray:', houseArray[i]);

    if (house === houseArray[i] ) {
    alert('One of my favorite cities!');
    first = true;
    break;
    }
  }
  if(!first) {
  alert('Nahh, that city sucks.');
  }
}
multiChoice();
