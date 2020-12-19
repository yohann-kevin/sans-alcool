// Je vais chercher ma toolbox contenant
// les deux fonctions dont j'ai besoin
let toolbox = require("./toolbox/toolbox.js");

let lineOne;
let lineTwo;

let lineOnePartOne =  " sans alcool sur le mur, ";
let lineOnePartTwo = " sans alcool.";

let lineTwoPartOne = "Bois en un et au suivant ! ";
let lineTwoPartTwo = " sans alcool sur le mur.";

let shooters = " shooters";

// Initialise le programme et récupère le nombre de shooter
function init() {
    let initTitle = "Bienvenue choisissez un nombre de shooter";
    console.log(initTitle);
    let number;
    number = toolbox.writeNum();
    melody(number);
}

// Lance la mélodie
function melody(num) {
    if (num === 1) shooters = " shooter";
    let title = "Vous avez choisi " + num + shooters;
    console.log(title);
    console.log(num + shooters + lineOnePartOne + num + shooters + lineOnePartTwo);
    console.log(lineTwoPartOne + (num - 1) + shooters + lineTwoPartTwo);
    verse(num);
}

// Fonction permettant de construire les couplets
function verse(num) {
    let index = num;
    for (let i = 0; i < index; i++) {
        num--; 
        if (num === 1) {
            shooters = " shooter";
            lineOne = num + shooters + lineOnePartOne + num + shooters + lineOnePartTwo;
            lineTwo = lineTwoPartOne + "plus de shooters" + lineTwoPartTwo;
        } else if (num === 0) {
            lineOne = "Plus de shooters sans alcool sur le mur, plus de shooters sans alcool."
            lineTwo = "Vas au supermarché pour en acheter, " + index + shooters + lineTwoPartTwo;
        } else  {
            lineOne = num + shooters + lineOnePartOne + num + shooters + lineOnePartTwo;
            lineTwo = lineTwoPartOne + (num - 1) + shooters + lineTwoPartTwo;
        }
        console.log(lineOne);
        console.log(lineTwo);
    }
    replay();
}

// Propose à l'utilisateur de tester de nouveau 
// le programme avec un nouveau nombre
function replay() {
    console.log(" ");
    console.log(" ");
    console.log("Souhaitez-vous rejouer la musique avec un nouveau nombre ?");
    console.log("(répondez par 'oui' ou par 'non')");
    let string = toolbox.writeString();
    verifyResponse(string);
}

// Vérifie la réponse de l'utilisateur
function verifyResponse(string) {
    if (string === "oui") {
        init();
    } else if (string === "non") {
        console.log("Au revoir :)");
    } else {
        console.log("Le programme n'a pas compris votre réponse !");
        console.log("Répondez soit par 'oui' soit par 'non' !");
        replay();
    }
}

// lance le programme
init();