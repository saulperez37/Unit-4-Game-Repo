$(document).ready(function () {

    //Variables for target number, score, wins & losses and crystals with random numbers
    let targetNumber = 0;
    let score = 0;
    let wins = 0;
    let losses = 0;
    let randomCrystalNum;
    let crystalValue;


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
    let images = ["./assets/images/crystal-01.png", "./assets/images/crystal-02.png",
        "./assets/images/crystal-03.png", "./assets/images/crystal-04.png"]

    function getCrystalInt() {

        for (let i = 0; i < images.length; i++) {

            randomCrystalNum = Math.floor(Math.random() * 12) + 1;

            var imageCrystal = $("<img width=150px>");

            imageCrystal.addClass("crystal-image");

            imageCrystal.attr("src", images[i]);

            imageCrystal.attr("data-crystalvalue", randomCrystalNum);

            $("#crystals").append(imageCrystal);
        }
    }

    getCrystalInt();

    //Click function for crystal images
    //If else statement that determines whether players wins or loses & updates players score counter
    $(document).on("click", ".crystal-image", function () {

        crystalValue = parseInt($(this).attr("data-crystalvalue"));

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

        $("#crystals").empty();
        getCrystalInt();
    }

});
