$("#heads").on("click", function () {

    flipCoin(0);

})

$("#tails").on("click", function () {

    flipCoin(1);

})

function flipCoin(result) {

    var randomNumber = Math.floor(Math.random() * 2);

    if (randomNumber === 0) {

        $("#imgDiv").html("<img src='images/us-quarter-front.jpg'>");
    }

    else {
        $("#imgDiv").html("<img src='images/us-quarter-back.jpg'>")
    }

}

