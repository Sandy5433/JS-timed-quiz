function printHighScore() {
    var savedScore = {...localStorage};
    var scoreList = document.querySelector(".score-list");
    if(savedScore)
    {
      debugger
      for(var i =0 ;i< Object.keys(savedScore).length; i++)
      {
        var initials = Object.keys(savedScore)[i];
         var score = savedScore[initials];
        var liTag = document.createElement("li");
        liTag.textContent = initials + ": " + score;
        var scoreList = document.querySelector(".score-list");
        console.log(scoreList);
        scoreList.appendChild(liTag);
      }
    }
  }

  printHighScore();
  