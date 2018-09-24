
$(document).ready(function () {
    qna = [
        {
            question: "There are a lot of different power forms in shonen mangas, which isn't one?",
            answerList: ["ki", "nen", "chakra", "the force"],
            correct: 3

        },
        {
            question: "Which one is an anime killer clown",
            answerList: ["Kakarott", "Hisoka", "Kisame", "Pennywise"],
            correct: 1
        }]

    var gifTimeOut = setTimeout(function () {

    }, 5000); 
    $(".start").on("click", function () {
        //using the hide() to change the layout of the page for certain events
        $(".board").show();
        $(".title").hide();
        $("button").hide();
        gameStart()
    })
$(".board").hide();

var timeUp= false;
var answer = 0;
var gifArray= ["gif1","hisok"]
//the timer is going to be 30 increments
var timer = 30;
var countDown;
function run() {
    countDown = setInterval(timeDown, 500
    )
}
var timeDown = function () {
    timer--;
    $("#time").html("<h3>Time remaining " + timer + " seconds</h3>");
    if (timer === 0) {
        $("#time").hide();
        timeUp = true;


    }
};
function stop() {
    clearInterval(countDown);
    timer= 30;
    
}
turn = 0;

var gameStart = function () {
    run();
    $("#gif").empty();
    if (timeUp === true) {
        console.log("its over")
    }

    var question = 0;
    
    var questionsRight = 0;
    var questionsWrong = 0;
    correct1 = qna[turn].correct;
    answer = qna[turn].answerList[correct1]
    console.log(answer);
    cq = qna[turn].question;
    $("#question").html(qna[turn].question);
     
     var ansPop= function() { 
         for (var i = 0; i < 4; i++) {
        $("#answer").append("<li>" + qna[turn].answerList[i] + "</li>");
    }};
    ansPop();

       
        
    
   
    
    $("li").on("click", function () {
        select = (this.innerHTML);

        if (select == (answer)) {
            console.log("yes");
            stop();
            $("#question").html("thats correct!");
            $("#answer").empty();
            $("#gif").html('<img src = "assets/images/' + gifArray[turn]+ '.gif" width=400px>');
            turn ++;
            $("#question").empty();
          
           // gameStart();
            questionsRight++
            setTimeout(gameStart, 5000);
        };
        if (select != (answer)) {
            console.log("no");
            stop();
            $("#question").html("No, thats not correct");
            $("#answer").empty();
            
            $("#gif").html('<img src= "assets/images/' + gifArray[turn] + '.gif" width=400px>');
            
          //  $("#question").html(qna[turn].question);
         // gameStart(); 
          console.log(cq)
          turn ++;
          setTimeout(gameStart, 5000);
        };

    })
};
})