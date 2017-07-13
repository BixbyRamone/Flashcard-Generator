/////index.js///////////////////////////////
fs = require('fs');
let gameType = process.argv[2];
// var inquirer = require("inquirer");
// let ClozeCard = require('./ClozeCard.js')

//var BasicCard = require('./BasicCard,js');
//var ClozeCard = require('./ClozeCard');


// let BasicCard = new FlashCard ({
// 	front: question,
// 	back: answer
// });
  console.log(gameType);
if ( gameType == "BasicCard" ) {
  console.log("if, run basiccard");
	basicCardFunct();

} else if ( gameType == "ClozeCard" ) {
  console.log("else if, run clozecard");
	clozeCardFunct();
} else {
	console.log('Please enter either "BasicCard" or "ClozeCard"');
}

/////BasicCard.js/////////////////////////

function basicCardFunct() {

let FlashCard = require('./BasicCard.js');

}



//////ClozeCard.js////////////////////

function clozeCardFunct() {

let ClozeCard = require('./ClozeCard.js')

}