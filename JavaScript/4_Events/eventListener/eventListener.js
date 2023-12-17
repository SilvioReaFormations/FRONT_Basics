// AddEventListener est une méthode de EventTarget, sui est accessible a ses enfants : Element, Document, Windows, ...
// Exemple des differents type d'eventListener : 

element.addEventListener('click', function(event) {
    // Votre code ici
});

element.addEventListener('mouseover', function(event) {
    // La souris survole l'élément
});

element.addEventListener('mouseout', function(event) {
    // La souris quitte l'élément
});

document.addEventListener('keydown', function(event) {
    // Une touche est enfoncée
});

document.addEventListener('keyup', function(event) {
    // Une touche est relâchée
});

window.addEventListener('load', function(event) {
    // La page est complètement chargée
});

inputElement.addEventListener('change', function(event) {
    // La valeur a changé
});

formElement.addEventListener('submit', function(event) {
    // Le formulaire est soumis
});




                        // EXEMPLE //

// Dans cet exemple, l'événement sera la fonction suivante : 
// fonction qui va changer le lien de l'image a chaque clic
let logo = "js"
let img = out.querySelector('img');

function clic(event){
    logo = logo == 'js' ? 'vscode' : 'js';
    event.target.src = `logo_${logo}.png`;
}


// Ajouter, supprimer un eventListener
// paramètres : type d'évenement, nom de la fonction
img.addEventListener('click', clic);

// Suppression du Listener après 5 sec
setTimeout(() => {
    img.removeEventListener('click', clic);
}, 5000);


// On peut aussi intégrer la fonction lambda directement en paramètre : 
img.addEventListener('click', evt => {
    logo = logo == 'js' ? 'vscode' : 'js';
    evt.target.src = `logo_${logo}.png`;
});

