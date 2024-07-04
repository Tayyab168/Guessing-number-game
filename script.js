let maxNumber = prompt("Plz Enter The Maximum Number");
let random = Math.floor(Math.random() * maxNumber) + 1;
let Guess = prompt("Guess The Number");

while (true) {
  if (Guess == "quit") {
    console.log("Your Quiting The Game ");
    break;
  }
  if (Guess == random) {
    prompt("Congratulations");
    break;
  } else if (Guess < random) {
    Guess = prompt("Hint: You Enter Smaller Number");
  } else {
    Guess = prompt(" Hint: your Enter Larger Number");
  }
}
