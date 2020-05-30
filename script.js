var clicks = 0
var highScore = 0
var clickText = document.getElementById("clickValue")
var highScore = document.getElementById("highScore")

if(localStorage.getItem("savedScore")){
    highScore.innerHTML = localStorage.getItem("savedScore")
}
else{
    highScore.innerHTML = 0
}

function increase(){
    clicks +=1
    clickText.innerHTML = clicks
}

function savedClicks(){
    savedClicks = clicks
    highScore.innerHTML = savedClicks
    localStorage.setItem("savedScore", savedClicks)
}