

// QUESTION 1

for(var i = 20; i <= 50; i ++){
	if(i % 3 === 0)
		console.log(i)
	else{
		console.log("")
	}
}

// QUESTION 2

for(var i = 0; i >= 0; i ++){
	console.log(i)
}

// QUESTION 3

var classmates = ["Bridjet", "Nathan", "Matias", "Mike", "Jason", "Reuben", "Ben", "Lane", "John", "Chris", "Terry", "Ann", "Katelyn", "Naomi", "Jeff"];

for(var i=0; i<= classmates.length; i++){
	if(i % 2 === 0){
		console.log(classmates[i])
	}
}

// Question 4

var menu = [{name: "pizza", glutenFree: false},{name: "salad", glutenFree: true},{name: "donut", glutenFree: false},{name: "steak", glutenFree: true},{name: "chicken", glutenFree: true},{name: "cheeseburger", glutenFree: false}];
var safe = []

for(var i=0; i<menu.length; i++){
	if(menu[i].glutenFree === true)
		safe.push(menu[i].name)
}

// Bonus!!!!

var league = [{name: "NFL", players: [{name: "Tom Brady", goat: false}, {name: "Walter Payton", goat: true}]}, {name: "NBA", players: [{name: "Michael Jordan", goat: true}, {name: "Lebron James", goat: false}]},{name: "MLB", players: [{name: "Babe Ruth", goat: true}, {name: "Alex Rodriguez", goat: false}]}]
var goatPlayers = []

for(i=0; i<league.length; i++){
	if(league[i].players[i].goat === true){
		goatPlayers.push(league[i].players[i].name)
	}
}