// fonction clic de mon event "onclick". Va afficher l'objet event dans la console
function clic (event){
    console.log(event);
}

// fonction qui va changer le lien de l'image a chaque clic
let logo = "js"
function clic2(event){
    logo = logo == 'js' ? 'vscode' : 'js';

    // event.target donne la référence de l'élément HTML sur lequel on clic
    event.target.src = `logo_${logo}.png`;
}