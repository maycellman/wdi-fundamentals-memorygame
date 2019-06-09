var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-hearts.png"
}
];
var cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay[0]===cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again");
	}		
}

function flipCard(cardId){
	var flippedCard = cards[cardId];
	console.log("User flipped " + flippedCard.rank + " of " + flippedCard.suit + " " + flippedCard.cardImage);
	cardsInPlay.push(cards[cardId].rank);
	if(cardsInPlay.length === 2){
		checkForMatch();
	}
	
}

flipCard(0);
flipCard(2);

