export default class Slider {
	constructor(wrapperElement) {
	  this.wrapperElement = document.querySelector(wrapperElement);
	  this.cards = this.wrapperElement.querySelectorAll('.menu-card');
	  this.leftTrigger = this.wrapperElement.querySelector('.left-trigger');
	  this.rightTrigger = this.wrapperElement.querySelector('.right-trigger');
 
	  this.leftTrigger.addEventListener('click', this.moveRight.bind(this));
	  this.rightTrigger.addEventListener('click', this.moveLeft.bind(this));
	  
	  this.currentCardIndex = 0;
	  this.cardsToShow = 3;
	  this.showCards();
	}
 
	moveLeft() {
	  for (let i = this.currentCardIndex; i < this.currentCardIndex + this.cardsToShow; i++) {
		 this.cards[i].classList.add('hidden');
	  }
	  this.currentCardIndex = (this.currentCardIndex + 1) % (this.cards.length - this.cardsToShow + 1);
	  this.showCards();
	}
 
	moveRight() {
	  for (let i = this.currentCardIndex; i < this.currentCardIndex + this.cardsToShow; i++) {
		 this.cards[i].classList.add('hidden');
	  }
	  this.currentCardIndex = (this.currentCardIndex - 1 + this.cards.length) % (this.cards.length - this.cardsToShow + 1);
	  this.showCards();
	}
 
	showCards() {
	  for (let i = this.currentCardIndex; i < this.currentCardIndex + this.cardsToShow; i++) {
		 if (i >= this.cards.length) {
			break;
		 }
		 this.cards[i].classList.remove('hidden');
	  }
	}
 }
 