
$(document).ready(function () {
    qna = [
        {
            question: "There are a lot of different power forms in shonen mangas, which isn't one?",
            answerList: ["ki", "nen", "chakra", "the force"],
            correct: 3

        },
        {
            question: "Which one is an anime killer clown?",
            answerList: ["Kakarott", "Hisoka", "Kisame", "Pennywise"],
            correct: 1
        },
         {
             question: "Which of these can fly?",
             answerList: ["Flying Raijin", "Nimbus", "Winged Saint", "Mantine"],
             correct: 1
         },
        {
            question: "In My Hero Acadamia which of these isn't a quirk?",
            answerList: ["Sugar Rush", "Explosion", "None for One", "Cremation"],
            correct: 2
        },
        {
            question: "In Naruto what chakra element can't Kakashi use",
            answerList: ["Fire", "Water", "Earth", "Wind"],
            correct: 3
        },
        {
            question: "Which one of these guys was a major Dragon Ball villian",
            answerList: ["Frieza", "Vegeta", "Tien", "Cell"],
            correct: 2
        },
        {
            question: "In the Pokemon Adventures manga, who was the true leader of Neo Team Rocket?",
            answerList:["Giovani", "Pryce", "Archie", "Silver"],
            correct: 1
        },
        {
            question: "In Bleach which member of the Espada symbolized emptieness",
            answerList:["Ulquiorra", "Stark", "Ichigo", "Nel"],
            correct: 0,
        },
        {
            question: "In the Yugioh manga which monster never got a toon counterpart?",
            answerList: ["Ancient Gear Golem", "Dark Magician", "Dark Magician Girl", "Ryu-Ran"],
            correct: 1
        },
        {
            question: "Who is the man in the mask in Naruto",
            answerList: ["Obito", "Madara", "Kagyua", "Black Zetsu"],
            correct: 0
        },
        {
            question: "In Boruto who isn't on team Konohamaru",
            answerList: ["Boruto", "Shikidai", "Sarada", "Mitsuki"],
            correct: 1,
        }
    ]

    
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
var gifArray= ["gif1","hisok", "nimbus", "boko", "kakashi", "tien","rocket", "espada", "toon", "obito", "boruto"]
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
    $("#time").hide();
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