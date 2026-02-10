function goToTimeline() {
  document.getElementById("landing").style.display = "none";
  document.getElementById("timeline").style.display = "block";
}

function goToLetters() {
  document.getElementById("timeline").style.display = "none";
  document.getElementById("letters").style.display = "block";
}

function goToFlowers() {
  document.getElementById("letters").style.display = "none";
  document.getElementById("flowers").style.display = "block";
}

function showFlower(message) {
  document.getElementById("flower-message").innerText = message;
}
