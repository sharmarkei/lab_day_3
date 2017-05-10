'use strict'

// Start
alert('Hello! Let\'s play a little game!');

// Get Player's Name
var user = prompt('First things first, What\'s you\'re name?');
console.log('user name:' + user);

alert('Thanks ' + user + ' ! Let\'s get started!');

// First Question
var shoeType = ['Nike', 'Asics', 'Vans']
var shoe = prompt('What is my favorite shoe brand?(Vans/Nike/Asics?)').toUpperCase();
var flagOne;
console.log('questionOne shoes:' + shoe);

for (var i = 0; i < shoeType.length; i++) {
  console.log('shoeType:', shoeType[i]);

  if (shoe === shoeType[i]) {
    alert('YES! That\'s the one!')
    flag = true;
    break;
  }
}

if (!flagOne) {
  alert('Nope! Wrong one')
}
//   if (shoe === 'VANS') {
//     alert('Nope! You\'re wrong.');
//   } else if (shoe === 'NIKE') {
//     alert('Yup, that\'s the one!');
//   } else if (shoe === 'ASICS') {
//     alert('I wouldn\'t be caught dead wearing them!');
//   } else {
//     alert('What are those?');
//     flagOne = true;
//     break;
//   }
// }

// }

// Second Question
var house = prompt('Do I have my own place?').toUpperCase();
console.log('own house:' + house);

if (house === 'Y' || house === 'YES') {
  alert('I wish! Still at momma\'s house.');
} else if (house === 'N' || house === 'NO') {
  alert('Hopefully after landing a job with what I learn at CF!');
}

// Third Question
var height = prompt('Am I taller than 6 feet?').toUpperCase();
console.log('my height:' + height);

if (height === 'Y' || height === 'YES') {
  alert('Only if I keep drinking my milk!');
} else if (height === 'N' || height === 'NO') {
  alert('Yeaaa, I\'m just an average joe');
} else {
  alert('Dude, only answer Y/N')
}

// Fourth Question
var computer = prompt('Do I use a Mac computer?').toUpperCase();
console.log('type computer:' + computer);

if(computer === 'Y' || computer === 'YES'){
  alert('Apple squad!')
} else{
  alert('PC\'s are extinct.')
}

// Fifth Question
var workout = prompt('Do I workout?').toUpperCase();
console.log('my workout:' + workout);

if(workout === 'Y' || workout === 'YES') {
  alert('That\'s going to change now that CF started');
} else {
  alert('Yea, I like that sedentary lifestyle.');
}

// Sixth Question
var drink = prompt('Do I drink water?').toUpperCase();
console.log('choice drink:' + drink);

if (drink === 'Y' || drink === 'YES') {
  alert('Only when I\'m not sleeping');
} else {
  alert('How are you alive if you don\'t?!');
}

// Seventh Question
var game = prompt("How would you rate this game? (Bad? Okay? Awesome?)").toUpperCase();
console.log('answer game:' + game);

while (game != 'AWESOME') {
 alert('Try again!');
 var game = prompt("How would you rate this game? (Bad? Okay? Awesome?)").toUpperCase();
}
alert('Correct!')
