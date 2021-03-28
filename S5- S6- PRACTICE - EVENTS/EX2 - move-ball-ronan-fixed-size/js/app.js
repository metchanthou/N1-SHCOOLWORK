let box = document.querySelector("#boxId");

function moveLeft() {
	// Move the box left
	let btnLeft =document.getElementById('boxId');
	btnLeft.style.left ='300px'
};

function moveRight() {
	// Move the box right
	let btnRight =document.getElementById('boxId');
	btnRight.style.right ='300px'
	
};

function moveUp() {
	// Move the box up
	let btnUp =document.getElementById('boxId');
	btnUp.style.top='300px';
};

function moveDown() {
  // Move the box down
  let btnDown =document.getElementById('boxId');
  btnDown.style.top ='300px';
};

// Get the 4 buttons and bind to the 4 functions
let myLeft =document.querySelector('#btn-move-left');
myLeft.addEventListener('click', moveLeft);

let myRight =document.querySelector('#btn-move-right');
myRight.addEventListener('click', moveRight);

let myUp =document.querySelector('.btn-bottom');
myUp.addEventListener('click', moveUp)

let myDown =document.querySelector('.btn-top');
myUp.addEventListener('click', moveDown);

