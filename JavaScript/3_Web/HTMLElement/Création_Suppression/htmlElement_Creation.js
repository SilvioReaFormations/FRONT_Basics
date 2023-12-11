// Créer un élement IMG (logoJS) et l'ajouter au DIV out (à la fin)
let logoJS = document.createElement('img');
logoJS.src= 'logo_js.png';
out.appendChild(logoJS);

// Créer un élément IMG (logoVsCode) et l'insérer avant logoJS : 
let logoVsCode = document.createElement('img');
logoVsCode.src='logo_vsCode.png';
out.insertBefore(logoVsCode, logoJS);