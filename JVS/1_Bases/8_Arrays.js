// TABLEAU SIMPLE //

let array = ["bob", "max", "tom"];

array[2] = 12;
console.log(array);         // => (3) ['bob', 'max', 12]

array[5] = "bernard";
console.log(array);         // => (5) ['bob', 'max', 12, …, 'bernard']

// Itération
for (const element of array) {
    console.log (element);
}

array.forEach(element => console.log(element));


// MATRICE //

let array2D = [[10, 20, 30], [1, 2]];

// Itération

for (const colonnes of array2D) {
    for (const lignes of colonnes) {
        console.log(lignes)
    }
    
}


// METHODES 

let tab = [4, 2, 1, 3];

tab.length;             // 4
tab.pop();              // Extraire de la fin [4, 2, 1]
tab.shift();            // Extraire au début [2, 1, 3]
tab.push(5);            // Ajouter à la fin [4, 2, 1, 5]
tab.unshift(0);         // Ajouter au début [0, 4, 2, 1, 3]
tab.join("-");          // [4-2-1-3] (String)
tab.sort();             // [1, 2, 3, 4]

// Itération sans traitement
tab.forEach(chiffre => console.log(chiffre));

// Itération AVEC traitement
let tab2 = tab.map(chiffre => chiffre + 1);         // [5, 3, 2, 4]

// Itération avec FILTRE
let tab3 = tab.filter(chiffre => chiffre%2 === 0);  // [4, 2]