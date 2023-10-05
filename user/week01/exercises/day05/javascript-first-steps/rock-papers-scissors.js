// YOUR CODE HERE >>

// Function that returns a random move, e.g. rock, paper, scissors:
function getRandomMove() {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return "WTF?";
  }
}

// Given a move, e.g. rock, paper, scissors, returns the result which must be strictly one of the following: "won", "lost", "draw"
function checkMove(move, computerMove) {

  if (move !== "rock" && move !== "paper" && move !== "scissors") {
    return "invalid move";
  }

  if (computerMove === move) {
    return "draw";
  } else if (computerMove === "rock") {
    if (move === "paper") {
      return "won";
    } else {
      return "lost";
    }
  } else if (computerMove === "paper") {
    if (move === "scissors") {
      return "won";
    } else {
      return "lost";
    }
  } else if (computerMove === "scissors") {
    if (move === "rock") {
      return "won";
    } else {
      return "lost";
    }
  }
}

const userMove = prompt("Make a move (rock, paper, scissors)!");

alert(checkMove(userMove, getRandomMove()));

// << YOUR CODE HERE

// Don't worry about the code below. It's just there to test your code above.
const drawn = new Set();
for (let i = 0; i < 100; i++) {
  const randomMove = getRandomMove();
  drawn.add(randomMove);
  const oneOfTheThreeMoves =
    randomMove === "rock" ||
    randomMove === "paper" ||
    randomMove === "scissors";
  if (!oneOfTheThreeMoves) {
    throw new Error(
      "Ops! Expected rock, paper or scissors, instead got " + randomMove
    );
  }
}

console.log(drawn);

if (!drawn.has("rock") || !drawn.has("paper") || !drawn.has("scissors")) {
  throw new Error("Ops! Did not find all three moves in the results!");
}

try {
  if (global) {
    global.getRandomMove = getRandomMove;
    global.checkMove = checkMove;
  }
} catch (e) {}
