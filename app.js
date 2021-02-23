$("#heads").on("click", function () {

    $("#imgDiv").html("<img src='images/us-quarter-front.jpg'>");
    flipCoin(0);

})

$("#tails").on("click", function () {

    $("#imgDiv").html("<img src='images/us-quarter-back.jpg'>");
    flipCoin(1);

})

var wins = 0;
var losses = 0;

function flipCoin(result) {

    var randomNumber = Math.floor(Math.random() * 2);

    if (result === randomNumber) {
        wins++;
        $("#wins").html("<h3>" + wins + "</h3>");
    }

    else {
        losses++;
        $("#losses").html("<h3>" + losses + "</h3>");
    }

}

