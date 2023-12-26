/////////////////////////////// IMAGES ////////////////////////////

// Créer un élement IMG (logoJS) et l'ajouter au DIV out (à la fin)
let logoJS = document.createElement('img');
logoJS.src= 'logo_js.png';
out.appendChild(logoJS);

// Créer un élément IMG (logoVsCode) et l'insérer avant logoJS : 
let logoVsCode = document.createElement('img');
logoVsCode.src='logo_vsCode.png';
out.insertBefore(logoVsCode, logoJS);


/////////////////////////////// TABLEAU ////////////////////////////

// Créer un element HTML de type table : 
let table = document.createElement('table');
table.style.cssText = "border: 2px solid; border-collapse: collapse";
let ligne = table.insertRow();
let cell = ligne.insertCell();

// Acceder à un élément du tableau
table.rows[1].cells[2] = "valeur que je souhaite"