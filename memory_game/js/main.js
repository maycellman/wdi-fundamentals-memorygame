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
	cardsInPlay.pop();
	cardsInPlay.pop();
		
}

function flipCard(){
	var cardId=this.getAttribute('data-id');
	var flippedCard = cards[cardId];
	console.log("User flipped " + flippedCard.rank + " of " + flippedCard.suit + " " + flippedCard.cardImage);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src',flippedCard.cardImage);
	if(cardsInPlay.length === 2){
		checkForMatch();
	}
	
}
function createBoard(){
	for(i=0; i<cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}
createBoard();

