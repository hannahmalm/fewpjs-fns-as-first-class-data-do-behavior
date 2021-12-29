/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
// String which specifies the 24-hour time in the format HH:MM
//If the time is earlier than 12pm, return "Good Morning".
//If the time is between 12pm and 5pm, return "Good Afternoon".
//If the time is later than 5pm, return "Good Evening".
function greet(time){
  if (time < 12) {
    greeting = "Good morning";
  } else if (time < 12 && time < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good evening";
  }
}
/* Write your implementation of displayMessage() */
//
function displayMessage(){

}
