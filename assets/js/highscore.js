function printHighScore() {
    var savedScore = JSON.parse(localStorage.getItem("allScores"));
    var scoreList = document.querySelector(".score-list");
    console.log(savedScore.initial + ": " + savedScore.score);
    var liTag = document.createElement("li");
    liTag.textContent = savedScore.initial + ": " + savedScore.score;
    var scoreList = document.querySelector(".score-list");
    console.log(scoreList);
    scoreList.appendChild(liTag);
  
  }
  
  printHighScore();


// function printHighScore () {
//   var savedScore = JSON.parse(localStorage.getItem("allScores"))
//   for (var i = 0; i < savedScore.length; i++) {
//   var liTag = document.createElement("li");
//   liTag.textContent = savedScore[i].initial + ": " + savedScore.score;
//   scoreList.appendChild(liTag)
//   }
// }

// printHighScore();