
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

var gameStart = function () {
    run();
    if (timeUp === true) {
        console.log("its over")
    }

    var question = 0;
    turn = 0;
    var questionsRight = 0;
    var questionsWrong = 0;
    correct1 = qna[turn].correct;
    answer = qna[turn].answerList[correct1]
    console.log(answer);
    cq = qna[turn].question;
    $("#question").html(cq);
    for (i = 0; i < 4; i++) {
        $("#answer").append("<li>" + qna[turn].answerList[i] + "</li>");

        console.log(qna[turn].answerList[i])
        
    }
   
    
    $("li").on("click", function () {
        select = (this.innerHTML);

        if (select == (answer)) {
            console.log("yes");
            stop();

            
        };
        if (select != (answer)) {
            console.log("no");
        };

    })
};
})