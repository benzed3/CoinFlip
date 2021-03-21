$("#heads").on("click", function () {

    var coinFlipping;

    $("#imgDiv").html("Coin is flipping...");

    coinFlipping = setTimeout(function () {
        flipCoin(0);
    }, 3000);

})

$("#tails").on("click", function () {

    var coinFlipping;

    $("#imgDiv").html("Coin is flipping...");

    coinFlipping = setTimeout(function () {
        flipCoin(1);
    }, 3000);

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
        $("#ratio").html("<h3>" + ratio.toFixed(2) + "</h3>");
        $("#text2").html("<h3>You Win!!</h3>");
    }

    else {
        losses++;
        total++;
        ratio = wins / total;
        $("#losses").html("<h3>" + losses + "</h3>");
        $("#ratio").html("<h3>" + ratio.toFixed(2) + "</h3>");
        $("#text2").html("<h3>Sorry! You lose!</h3>");
    }

    if (randomNumber === 0) {
        $("#imgDiv").html("<img src='images/us-quarter-front.jpg'>");
    }

    else {
        $("#imgDiv").html("<img src='images/us-quarter-back.jpg'>");
    }

}

