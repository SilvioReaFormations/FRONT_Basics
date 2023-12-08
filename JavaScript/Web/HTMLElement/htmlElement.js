// Selection du 1er élément qui porte le nom de classe "titre"
let e = document.querySelector('.titre');

// Accéder au contenu texte de ma selection
e.textContent;                  // 1
e.textContent = 3               // 3. Va modifier le texte de l'élément HTML

// Accéder au contenu HTML de ma selection
e.innerHTML;                    // <strong>1</strong>


/////////


// Selection de tous les éléments qui portent le nom de la classe "titre". On récupère un tableau
let tab = document.querySelectorAll('.titre');

for (element of tab) {
    console.log(element.textContent);
}

/////////


// JS crée automatiquement une variable pour tous les éléments HTML de type "id"
console.log(out);

// Selection d'une élement dans le contexte d'un autre élément (et pas dans tous le document)
out.querySelector('div');