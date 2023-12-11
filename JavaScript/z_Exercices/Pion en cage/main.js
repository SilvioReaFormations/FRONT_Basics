// Création du pion
let pion = document.createElement('img');
pion.src = 'pion.png';

// Création de la cage avec un élément TABLE
let cage = document.createElement('table');
cage.style.cssText = "border: 2px solid; border-collapse: collapse";

// Boucle des rangées
for(let tr = 0; tr < 5; tr++){
    cage.appendChild(document.createElement('tr'));
    
    for(td=0; td<5; td++){
        table.appendChild(document.createElement('td'));
        if(tr===2 && td ===2) {
            table.appendChild(pion);
        }
    }

}