// fonction qui va changer le lien de l'image a chaque clic
let logo = "js"
let img = out.querySelector('img');

function clic(event){
    logo = logo == 'js' ? 'vscode' : 'js';
    event.target.src = `logo_${logo}.png`;
}


// Ajouter, supprimer un eventListener
// paramètres : type d'évenement, nom de la fonction, utilisation du mode capture
img.addEventListener('click', clic, false);

// Suppression du Listener après 5 sec
setTimeout(() => {
    img.removeEventListener('click', clic, false);
}, 5000);


// On peut aussi intégrer la fonction lambda directement en paramètre : 
img.addEventListener('click', evt => {
    logo = logo == 'js' ? 'vscode' : 'js';
    evt.target.src = `logo_${logo}.png`;
}, false);