// Classe qui représente la fenètre du navigateur. Possède plusieurs propriétés

/* window.document: 
 Cette propriété renvoie l'objet Document associé à la fenêtre. 
 Vous pouvez l'utiliser pour accéder au contenu HTML de la page, manipuler le DOM (Document Object Model) 
 et effectuer des opérations sur les éléments de la page. */
const myElement = window.document.getElementById('monElement');

/* window.location: 
 Cette propriété fournit des informations sur l'URL de la page en cours 
 et permet de naviguer vers d'autres URL.*/
const currentURL = window.location.href;

/* window.history:
Elle permet de gérer l'historique de navigation du navigateur  par rapport
à notre page actuelle*/
history.go(-1);

/* window.alert(): 
 Cette méthode affiche une boîte de dialogue modale avec un message et un bouton "OK". 
 Elle est couramment utilisée pour afficher des messages d'alerte à l'utilisateur.*/
window.alert('Ceci est une alerte');

/* window.prompt(): 
Cette méthode affiche une boîte de dialogue modale avec un champ de saisie, un message 
et des boutons "OK" et "Annuler". Elle permet à l'utilisateur de saisir des données.*/
// return String or Null
const nomUtilisateur = window.prompt('Veuillez saisir votre nom :', 'John Doe');

/* window.confirm():
 Cette méthode affiche une boîte de dialogue modale avec un message 
 et des boutons "OK" et "Annuler". Elle permet à l'utilisateur de confirmer une action.*/
 // return true or false
const confirmation = window.confirm('voulez vous supprimer cet élément ?')
if(confirmation){
    // code pour supprimer l'élément
}

/* window.innerWidth et window.innerHeight: 
 Ces propriétés renvoient la largeur et la hauteur de la fenêtre du navigateur en pixels. 
 Elles sont couramment utilisées pour rendre des pages Web réactives.*/
const largeurFenetre = window.innerWidth;
const hauteurFenetre = window.innerHeight;

/* window.localStorage et window.sessionStorage: 
 Ces propriétés permettent de stocker des données localement dans le navigateur. 
 localStorage conserve les données jusqu'à ce qu'elles soient explicitement supprimées par l'utilisateur, 
 sessionStorage les conserve pendant la durée de la session de navigation.*/
window.localStorage.setItem('clé', 'valeur');           // Stockage de données dans localStorage
const valeur = window.localStorage.getItem('clé');      // Récupération de données depuis localStorage

/*window.setTimeout() et window.setInterval(): 
Ces méthodes permettent de planifier l'exécution de fonctions après un certain délai (setTimeout) 
ou à intervalles réguliers (setInterval).*/
// windows.setTimeout(() => {méthode}, délais)

let delay = setTimeout( () => {
    console.log("S'exécute après 2 secondes");
}, 2000);

clearTimeout(delay)         // Supprime la référence à mon délais

let interval = setInterval( () => {
    console.log("Exécution toutes les 5 sec");
}, 5000);

clearInterval(interval)     // Supprome la référence à mon interval