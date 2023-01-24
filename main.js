// Scroll in transition

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 125;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// Filter Projects
const higherOrLower = document.querySelector(".higher-or-lower-project");
const ticTacToe = document.querySelector(".tic-tac-toe-project");
const rockPaperScissors = document.querySelector(
  ".rock-paper-scissors-project"
);
const diceGame = document.querySelector(".dice-game-project");

// Filter type Text
const allProjectText = document.querySelector("#all-projects");
const webDevelopmentText = document.querySelector(".web-development");
const gameProjectText = document.querySelector(".games");
const otherProjectText = document.querySelector(".other");

// Event Listener
allProjectText.addEventListener("click", displayAllProjects);
webDevelopmentText.addEventListener("click", displayWebProjects);
gameProjectText.addEventListener("click", displayGameProjects);
otherProjectText.addEventListener("click", displayOtherProjects);

function displayAllProjects() {
  allProjectText.classList.add("filter-active");
  higherOrLower.classList.remove("hidden");
  ticTacToe.classList.remove("hidden");
  rockPaperScissors.classList.remove("hidden");
  diceGame.classList.remove("hidden");
  webDevelopmentText.classList.remove("filter-active");
  gameProjectText.classList.remove("filter-active");
  otherProjectText.classList.remove("filter-active");
}

function displayWebProjects() {
  webDevelopmentText.classList.add("filter-active");
  higherOrLower.classList.add("hidden");
  ticTacToe.classList.add("hidden");
  rockPaperScissors.classList.add("hidden");
  diceGame.classList.add("hidden");
  allProjectText.classList.remove("filter-active");
  gameProjectText.classList.remove("filter-active");
  otherProjectText.classList.remove("filter-active");
}

function displayGameProjects() {
  gameProjectText.classList.add("filter-active");
  higherOrLower.classList.remove("hidden");
  ticTacToe.classList.remove("hidden");
  rockPaperScissors.classList.remove("hidden");
  diceGame.classList.remove("hidden");
  allProjectText.classList.remove("filter-active");
  webDevelopmentText.classList.remove("filter-active");
  otherProjectText.classList.remove("filter-active");
}

function displayOtherProjects() {
  otherProjectText.classList.add("filter-active");
  higherOrLower.classList.add("hidden");
  ticTacToe.classList.add("hidden");
  rockPaperScissors.classList.add("hidden");
  diceGame.classList.add("hidden");
  allProjectText.classList.remove("filter-active");
  webDevelopmentText.classList.remove("filter-active");
  gameProjectText.classList.remove("filter-active");
}
