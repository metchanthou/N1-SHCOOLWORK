const NUMBER_BOX = 10;

let container = document.querySelector(".container");

// 1- Create the 10 boxes on the container DIV
// For each box:
// 1-1 Create a span and set it with a random number between 1 and 10
// Example :   <span>49</span>

// 1-2- Create a box div to wrap the span
// The div must have:
//    - class = "box"
//    - id = box<index>   (index of thebox, 0 to 9)
// Example :   <div class="box" id="box5"><span>49</span></div>

// 1-3 Add a listener when clicking on the box
// 1-4 Add the box to the container

// This function is called when any box is clicke
function onBoxClick(event) {
  // 1- Get the box related to the click event
  // 2- Get the span (the childen of the box) and get the number
  //  3- If even is EVEN, set the box to green and spam text to WON and the number
  //  4- If even is ODD, set the box to red and spam text to LOST and the number
  //  5- Also change the opacity of the span to make it visible
}
