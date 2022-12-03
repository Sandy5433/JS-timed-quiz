function printHighScore() {
    var savedScore = JSON.parse(localStorage.getItem("highscore"));
    var scoreList = document.querySelector(".score-list");
    console.log(savedScore.initial + ": " + savedScore.score);
    var liTag = document.createElement("li");
    liTag.textContent = savedScore.initial + ": " + savedScore.score;
    var scoreList = document.querySelector(".score-list");
    console.log(scoreList);
    scoreList.appendChild(liTag);
  
  }
  
  printHighScore();