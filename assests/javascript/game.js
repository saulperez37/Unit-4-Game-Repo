$(document).ready(function () {

    //Variables for target number, score, wins & losses and crystals with random numbers

    let targetNumber = 0;
    let score = 0;
    let wins = 0;
    let losses = 0;
    let crystals = "";
    let randomCrystalNum = "";

    //Generate random number that will be guessed

    function getRndInteger(min, max) {
        min = 9;
        max = 120;

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    targetNumber = getRndInteger(9, 120);
    $("#number-to-guess").append(targetNumber);
    console.log(targetNumber);

    //Crstal images that will display in browser



});
