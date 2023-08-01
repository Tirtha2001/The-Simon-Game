var buttonColours = ["red","blue","green","yellow"];
var userClickedPattern = [];
var gamePattern = [];
var level = 0;
var started = false;


//2th part
$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

//5th part
$(document).keypress(function() {
    if(!started){
        $("h1").text("Level " +level);
        nextSequence();
        started = true;
    }
});

//6th part
function checkAnswer(currentLevel) {

    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length){

            setTimeout(function () {
              nextSequence();
            }, 1000);
          }
    }

    else {
        playSound("wrong");
        
        $("h1").text("Game Over, Press Any Key to Restart");
        
        $("body").addClass("game-over");
        
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        startOver();        
    }
}


//1th part
function nextSequence() {
    userClickedPattern = [];
    level++;
    $("h1").text("Level " +level);        

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

//3th part
function playSound(name) {
    var audio = new Audio("./sounds/"+name+".mp3");
    audio.play(); 
}

//4th part
function animatePress(currentColour) {
    $("#"+currentColour).addClass("pressed");

    setTimeout(function() {
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}


function startOver() {
    level = 0;
    started = false;
    gamePattern = [];
}