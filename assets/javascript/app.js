
$(document).ready(function () {
    $("#restartB").hide();
    qna = [
        {
            question: "There are a lot of different power forms in shonen mangas, which isn't one?",
            answerList: ["ki", "nen", "chakra", "the force"],
            correct: 3,
            response: ["You're right! The force is dumb Star Wars, not shonen", "-_- the corrct answer was the force"]

        },
        {
            question: "Which one is an anime killer clown?",
            answerList: ["Kakarott", "Hisoka", "Kisame", "Pennywise"],
            correct: 1,
            response: ["Correct! Hisoka is a killer anime clown", "Wrong, Kakarott is a clown but not killer and Pennywise is a killer clown but not an anime one!"]
        },
         {
             question: "Which of these can fly?",
             answerList: ["Flying Raijin", "Nimbus", "Winged Saint", "Mantine"],
             correct: 1,
             response: ["Correct the Nimbus is a flying cloud from Dragon Ball!", "Wrong, despite their names, only the Nimbus can fly"]
         },
        {
            question: "In My Hero Acadamia which of these isn't a quirk?",
            answerList: ["Sugar Rush", "Explosion", "None for One", "Cremation"],
            correct: 2,
            response: ["Thats correct! Plus Ultra!", "Wrong, the correct answer was None for One"]
        },
        {
            question: "In Naruto what chakra element can't Kakashi use",
            answerList: ["Fire", "Water", "Earth", "Wind"],
            correct: 3,
            response: ["Correct! Kakashi is cool huh?", "Nope, the element he can't use is wind!"]
        },
        {
            question: "Which one of these guys was a major Dragon Ball villian",
            answerList: ["Frieza", "Vegeta", "Tien", "Cell"],
            correct: 2,
            response: ["Correct!", "Wrong, those are DBZ villians, Tien is a villian in the original Dragon Ball series uwu"]
        },
        {
            question: "In the Pokemon Adventures manga, who was the true leader of Neo Team Rocket?",
            answerList:["Giovani", "Pryce", "Archie", "Silver"],
            correct: 1,
            response: ["Yes! That sure was a dark arc for the manga", "Wrong, believe it or not it was old man Pryce!"]
        },
        {
            question: "In Bleach which member of the Espada symbolized emptieness",
            answerList:["Ulquiorra", "Stark", "Ichigo", "Nel"],
            correct: 0,
            response: ["Correct, that was a cool fight", "No, the correct answer is Ulquiorra"]
        },
        {
            question: "In the Yugioh manga which monster never got a toon counterpart?",
            answerList: ["Ancient Gear Golem", "Dark Magician", "Dark Magician Girl", "Ryu-Ran"],
            correct: 1,
            response: ["Correct, toon world sure is wacky", "Incorrect, the answer was Dark Magician"]
        },
        {
            question: "Who is the man in the mask in Naruto",
            answerList: ["Obito", "Madara", "Kagyua", "Black Zetsu"],
            correct: 0,
            response: ["Correct, you know your Naruto", "The correct answer was Obito, you don't know your Naruto"]
        },
        {
            question: "In Boruto who isn't on team Konohamaru",
            answerList: ["Boruto", "Shikidai", "Sarada", "Mitsuki"],
            correct: 1,
            response: ["Correct! How good is Boruto am I right?", "Incorrect, you should watch Boruto, it's good"]
        }
    ]

    var gameOver = function () {
        stop();
        turn = 0;
        $("#gif").empty();
        $("#question").html("That's the end of the game, lets see how you did!");
        $("#result1").html("Questions Right: " + questionsRight);
        $("#result2").html("Questions Wrong: " + questionsWrong);
       $("#restartB").show();
    }

    
    $(".start").on("click", function () {
        //using the hide() to change the layout of the page for certain events
        $(".board").show();
        $(".title").hide();
        $("button").hide();
        gameStart();
    })
  gameReset = true;
$(".board").hide();

var questionsRight = 0;
var questionsWrong = 0;

var answer = 0;
var gifArray= ["gif1","hisok", "nimbus", "boko", "kakashi", "tien","rocket", "espada", "toon", "obito", "boruto"];
var clock = "clock";
//the timer is going to be 30 increments
var timer = 20;
var countDown;
function run() {
    $("#time").show();
    countDown = setInterval(timeDown, 1000
    )
}
//sets the timer and the reaction if the player runs out of time on a question
var timeDown = function () {
    timer--;
    $("#time").html("<h3>Time remaining " + timer + " seconds</h3>");
 
    if (timer <= 0) {
        stop();
        timeUp = true;
        $("#answer").empty();
        $("#question").html("Your time is up it is over");
        $("#gif").html('<img src = "assets/images/clock.gif" width= 400px>');
        setTimeout(turnStart, 5000);
        turn++;
        questionsWrong++;
        

    };
           
    if ((turn === qna.length)) {
        stop();
        timeUp = true;
        $("#answer").empty();
        $("#question").html("Your time is up it is over");
        $("#gif").html('<img src = "assets/images/clock.gif" width= 400px>');
        setTimeout(gameOver, 5000);
        turn++;
        questionsWrong++;
    }
   
};
function stop() {
    clearInterval(countDown);
    $("#time").hide();
    timer= 20;
    
}
turn = 0;


//this starts the questions

var gameStart = function () {
    questionsRight=0;
    questionsWrong=0;
    turn=0;
    turnStart();
    $("#result1").empty();
    $("#result2").empty();
}
    
var turnStart = function () {
    run();
    $("#gif").empty();
    correct1 = qna[turn].correct;
    answer = qna[turn].answerList[correct1]
    console.log(answer);
    cq = qna[turn].question;
    $("#question").html(qna[turn].question);
     
     var ansPop= function() { 
         for (var i = 0; i < 4; i++) {
        $("#answer").append("<li>" + qna[turn].answerList[i] + "</li>");
    }
};
    ansPop();




    
    $("li").on("click", function () {
        select = (this.innerHTML);
            if ((select === answer) && (turn == qna.length-1)){
                stop();
                $("#question").html(qna[turn].response[0]);
                $("#answer").empty();
                questionsRight++
                $("#gif").html('<img src = "assets/images/' + gifArray[turn] + '.gif" height=250px; width=400px>');
                setTimeout(gameOver, 5000);
            }
            else if ((select != answer) && (turn == qna.length-1)) {
                stop();
                $("#question").html(qna[turn].response[1]);
                $("#answer").empty();
                questionsWrong++
                $("#gif").html('<img src = "assets/images/' + gifArray[turn] + '.gif" height=250px; width=400px>');
                setTimeout(gameOver, 5000);
            }
            
            
      else if (select == (answer)) {
            console.log("yes");
            stop();
            
            $("#question").html(qna[turn].response[0]);
            $("#answer").empty();
            $("#gif").html('<img src = "assets/images/' + gifArray[turn]+ '.gif" height= 250px; width=400px>');
            turn ++;
            questionsRight++
            setTimeout(turnStart, 5000);
        }
        else if (select != (answer)) {
            console.log("no");
            stop();
            $("#question").html(qna[turn].response[1]);
            $("#answer").empty();
            
            $("#gif").html('<img src= "assets/images/' + gifArray[turn] + '.gif" height=250px; width=400px>');
            
          //  $("#question").html(qna[turn].question);
         // gameStart(); 
          console.log(cq)
          turn ++;
          questionsWrong++;
          setTimeout(turnStart, 5000);
        };

    })

};

})