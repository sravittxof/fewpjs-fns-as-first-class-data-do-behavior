/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const timeSplit = time.split(':');
  const timeInt = parseInt(timeSplit[0], 10);

  if (timeInt < 12) {
    return "Good Morning";
  } else if (timeInt < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }

}

/* Write your implementation of displayMessage() */
function displayMessage(message) {
  const currentMessage = document.getElementById('greeting');
  currentMessage.innerText = message;
}