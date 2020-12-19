// J'installe le module readline pour permettre 
// aux utilisateurs d'écrire dans la console.
let readline = require("readline-sync");

let toolbox = {
    // Fonction permettant à l'utilisateur d'écrire un entier
    writeNum: function (num) {
        return readline.questionInt(num);
    },
    // Fonction permettant à l'utilisateur d'écrire une chaîne de caractère
    writeString: function (txt) {
        return readline.question(txt);
    }
};

module.exports = toolbox;