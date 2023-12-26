// FONCTION CLASSIQUE
function maFonction(string) {
    let message = string;
    alert(string);
    return message;
}

maFonction ("hello world");


// FONCTION FLECHEE
const addition = (a, b, c) => {
    return (a + b + c);
}

const message = (monMessage) => {
    console.log(monMessage);
}

message (addition("J'ai ", 37, " ans"));



// PARAMETRE PAR DEFAUT : on peut déclarer la valeur d'un paramètre d'une fonction entre parenthèses
function somme (a, b, c = 2){
    return a + b + c;
}


/* REST PARAMETER : avec '...' en paramètre, TOUS les paramètres suivant seront intégrés dans ce REST PARAMETER.
    Il s'agira donc d'un TABLEAU DE PARAMETRES */
function moyenne(prenom, ...notes){
    let somme = 0;
    for (const element of notes) {
        somme += element;
    }

    let moyenne = (somme / notes.length) || 0;          // <= SHORT CIRCUIT OPERATOR
    console.log(`${prenom} a ${moyenne} de moyenne.`)
}
moyenne("Silvio", 13, 12, 16, 8);


// FONCTION VARIADIQUE
/* "arguments" est un tableau de TOUS LES PARAMETRES de la méthode 
C'est un tableau limité qui n'a pas accès à toutes les méthodes Array*/
function add() {
    let somme = 0;
    // pas de boucle for possible avec arguments
    for(let i = 0; i < arguments.length; i++){
        somme += arguments[i];
    }
}
let maSomme = add(1, 4, 6, 3); 


// SPREAD OPERATOR
/* Lors de l'appel d'une fonction, il permets de passer un tableau en paramètre
Il permets de transformer un tableau en une série*/
let notes = [1, 4, 6, 3];
add(...notes);


