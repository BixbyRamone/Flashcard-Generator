/////index.js///////////////////////////////
fs = require('fs');
let gameType = process.argv[2];

//var BasicCard = require('./BasicCard,js');
//var ClozeCard = require('./ClozeCard');


// let BasicCard = new FlashCard ({
// 	front: question,
// 	back: answer
// });

if ( gameType == "BasicCard" ) {
	basicCardFunct();
} else if ( gameType == "ClozeCard" ) {
	clozeCardFunct();
} else {
	console.log('Please enter either "BasicCard" or "ClozeCard"');
}

/////BasicCard.js/////////////////////////

function basicCardFunct() {
var inquirer = require("inquirer");

//read txt file for questions

let questionArray = fs.readFile("cardinfo.txt", "utf8", function(err, data) {
	if (err) {
    	return console.log(err);
    }

    // data = "Who was the first president of the United States of America?, George Washington; What was the capital of Assyria?, Nineveh"
    let dataArray = [];
    dataArray.push(data);
    dataArray = data.split( ";");
    // dataArray = dataArray.split(",");

    // console.log("!!!" + dataArray[]);

    // let testVar = dataArray[1].trim();

    // console.log("!!!!: " + testVar);

    // console.log(data);


function FlashCard ( info ) {
	this.front = info.front;
	this.back = info.back;
	
	// return this;
}



for (var i = 0; i < dataArray.length - 1; i = i + 2) {
  	BasicCard = new FlashCard ({
	front: dataArray[i].trim(),
	back: dataArray[i + 1].trim()
	});
  	console.log(BasicCard);

  	inquirer.prompt([

  // ask card question.
  {
    type: "input",
    message: BasicCard,// will be a var from the BasicCard Constructor
    name: "card"
  }
  ]).then(function(user) {

  })


}





// console.log(BasicCard);

});

//divide questions into an array

//select a random question


// make a BasicCard constructor





}



//////ClozeCard.js////////////////////

function clozeCardFunct() {
var inquirer = require("inquirer");

//read txt file for questions

let questionArray = fs.readFile("cardinfo.txt", "utf8", function(err, data) {
	if (err) {
    	return console.log(err);
    }

    // data = "Who was the first president of the United States of America?, George Washington; What was the capital of Assyria?, Nineveh"
    let dataArray = [];
    dataArray.push(data);
    dataArray = data.split( ";");
    // dataArray = dataArray.split(",");

    // console.log("!!!" + dataArray[]);

    // let testVar = dataArray[1].trim();

    // console.log("!!!!: " + testVar);

    // console.log(data);


function FlashCard ( info ) {
	this.front = info.front;
	this.back = info.back;
	
	// return this;
}



for (var i = 0; i < dataArray.length - 1; i = i + 2) {
	let cardFront = dataArray[i]
	cardFront = cardFront.trim();
	cardFront = cardFront.replace( "Who", "__________" );
	cardFront = cardFront.replace( "What", "__________" );
	cardFront = cardFront.replace( "Why", "__________" );
	cardFront = cardFront.replace( "When", "__________" );
	cardFront = cardFront.replace( "Where", "__________" );

  	BasicCard = new FlashCard ({
	front: cardFront,
	back: dataArray[i + 1].trim()
	});
  	console.log(BasicCard);

  }

});

}