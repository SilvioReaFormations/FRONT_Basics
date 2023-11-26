let tab = [4, 2, 1, 3];


tab.length;             // 4
tab.pop();              // Extraire de la fin [4, 2, 1]
tab.shift();            // Extraire au début [2, 1, 3]
tab.push(5);            // Ajouter à la fin [4, 2, 1, 5]
tab.unshift(0);         // Ajouter au début [0, 4, 2, 1, 3]
tab.join("-");          // [4-2-1-3] (String)
tab.sort();             // [1, 2, 3, 4]

// Parcourir
tab.forEach(chiffre => chiffre + 1)