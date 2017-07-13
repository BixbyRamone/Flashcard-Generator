var inquirer = require("inquirer");

//read txt file for questions

let questionArray = fs.readFile("cardinfo.txt", "utf8", function(err, data) {
	if (err) {
    	return console.log(err);
    }

    let dataArray = [];
    dataArray.push(data);
    dataArray = data.split( ";");


function FlashCard ( info ) {

	this.front = info.front;
	this.back = info.back;
	
}



for (var i = 0; i < dataArray.length - 1; i = i + 2) {
  	BasicCard = new FlashCard ({
	front: dataArray[i].trim(),
	back: dataArray[i + 1].trim()
	});
  	console.log(BasicCard);

//   	inquirer.prompt([

//   // ask card question.
//   {
//     type: "input",
//     message: BasicCard.front,
//     name: "card"
//   }
//   ]).then(function(answer) {
//   	console.log(BasicCard.back);
//   })

//   	module.exports = BasicCard;


// }




// console.log(BasicCard);

// });

