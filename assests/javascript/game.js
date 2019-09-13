$(document).ready(function () {

    //Variables for target number, score, wins & losses and crystals with random numbers

    let targetNumber = 0;
    let score = 0;
    let wins = 0;
    let losses = 0;

    //Generate random number that will be guessed

    function getRndInteger(min, max) {
        min = 9;
        max = 120;

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    targetNumber = getRndInteger(9, 120);
    $("#number-to-guess").append(targetNumber);
    console.log(targetNumber);

    //Crstal images that will display in browser and random numbers assigned

    let images = ["./assests/images/crystal-01.png", "./assests/images/crystal-02.png",
        "./assests/images/crystal-03.png", "./assests/images/crystal-04.png"]

    function getCrystalInt() {
        // return Math.floor(Math.random() * 12) + 1;


        //    $(".crystal-image").remove();

        for (let i = 0; i < images.length; i++) {
            // console.log(images.length);


            // var randomCrystalNum = getCrystalInt();
            // var randomCrystalNum = Math.floor(Math.random() * 12) + 1;
            // console.log(randomCrystalNum);


            var imageCrystal = $("<img width=150px>");

            imageCrystal.addClass("crystal-image");

            imageCrystal.attr("src", images[i]);

            imageCrystal.attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);

            $("#crystals").append(imageCrystal);


        }
    }

    getCrystalInt();

    //Click function for crystal images
    //If else statement that determines whether players wins or loses & updates players score counter

    $(".crystal-image").on("click", function () {

        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);

        score += crystalValue;
        $("#score").text(score);

        console.log(crystalValue);

        if (score === targetNumber) {
            alert("YOU WIN!");
            wins++;
            $("#wins").text("Wins: " + wins);
            resetGame();

        }
        else if (score >= targetNumber) {
            alert("Sorry you lose!");
            losses++;
            $("#losses").text("Losses: " + losses);
            resetGame();

        }

    });

    //Reset function takes place after player wins or loses

    function resetGame() {
        score = 0;
        $("#score").text(score);

        targetNumber = getRndInteger(9, 120);
        $("#number-to-guess").text(targetNumber);

        $(".crystal-image").remove();
        getCrystalInt();

    }


});
