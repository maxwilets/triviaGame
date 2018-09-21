
$(document).ready(function (){
    console.log("hi0");
    $(".start").on("click", function(){
       //using the hide() to change the layout of the page for certain events
        $(".title").hide();
        $("button").hide();
        gameStart()
    })
})
var question = 0;
var answer = 0;
var questionsRight = 0;
var questionsWrong = 0;
//the timer is going to be 30 increments
var timer = 30;
var countDown;
function run() {
    countDown= setInterval(timeDown, 1000
)}
var timeDown = function(){
    timer --;
    $("#time").html("<h3>Time remaining " + timer + " seconds</h3>");
    if (timer === 0) {
        $("#time").hide();
    }
}
var gameStart = function(){
    
    run();
};