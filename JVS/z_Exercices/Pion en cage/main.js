
// Création de la cage avec un élément TABLE
let cage = document.createElement('table');
cage.style.cssText = "border: 2px solid; border-collapse: collapse";

// Boucle des rangées
for ( let x = 0; x < 5; x++ ){
    let tr = cage.insertRow();

    // Boucle des celllules de chaque rangée
    for ( let y = 0; y < 5; y++ ){
        let td = tr.insertCell();
        td.style.cssText = "border: 1px solid; width: 100px; height: 100px; font-size=0";
    }
}


// // Création du pion
// let pion = document.createElement('img');
// pion.src = 'pion.png';


// // Positionner le PION au centre de la table
// let x = y = 2;
// cage.rows[x].cells[y].appendChild(pion)


// Ajouter la table à la DIV
div.appendChild(cage);



// A FINIR A PARTIR DE LA


// Ecouter les saisies au clavier
document.addEventListener('keydown', evt =>  {
   if (evt.key === 'ArrowUp')  console.log(evt.key);
});