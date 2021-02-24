$("#heads").on("click", function () {

    $("#imgDiv").append("<img src='images/us-quarter-front.jpg'>");
    flipCoin(0);

})

$("#tails").on("click", function () {

    $("#imgDiv").append("<img src='images/us-quarter-back.jpg'>");
    flipCoin(1);

})

var wins = 0;
var losses = 0;
var total = 0;
var ratio = 0;

function flipCoin(result) {

    var randomNumber = Math.floor(Math.random() * 2);

    if (result === randomNumber) {
        wins++;
        total++;
        ratio = wins / total;
        $("#wins").html("<h3>" + wins + "</h3>");
        $("#ratio").html("<h3>" + ratio + "</h3>");
        $("#text2").html("<h3>You Win!!</h3>");
    }

    else {
        losses++;
        total++;
        ratio = wins / total;
        $("#losses").html("<h3>" + losses + "</h3>");
        $("#ratio").html("<h3>" + ratio + "</h3>");
        $("#text2").html("<h3>Sorry! You lose!</h3>");
    }

}

