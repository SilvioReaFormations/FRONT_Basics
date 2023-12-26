// On déclare une variable, éventuellement en initialisant sa valeur.
var text = "hello"; // <= NE PLUS UTILISER

/* On déclare une variable dont la portée est celle du bloc courant, 
éventuellement en initialisant sa valeur.*/
let chiffre = 2;

/*
On déclare une constante nommée, dont la portée est celle du bloc courant, 
accessible en lecture seule. */
const TEXT2 = "le monde";



// CONCATENATION //`
// ALT GR + 7 =>  ` ` avec variable entre ${}

let concatenation = ` j'ajoute ${text} à ${TEXT2} ! `;
console.log(concatenation);


// DESTRUCTURING ASSIGNMENT
let a, b, c;

[a, b] = [3, 8]             // a = 3, b = 8
[a, b, c] = [1, 2]          // a = 1, b = 2, c = undefined
[a, b, c = 13] = [2, 4]     // a = 2, b = 4, c = 13
[a, b] = [b, a]             // ECHANGE DES VALEURS


/* HOISTING : Principe de pouvoir appeler une variable avant de la déclarer .
    Avec le mot clé "VAR" on peut utiliser la variable avant de la déclarer.
    Les Fontction aussi subissent le Hoisting comme en JAVA */

