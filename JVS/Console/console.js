// Message console
console.log("Hello world");

// Erreur
console.error("erreur")

// Warning
console.warn("warning");

// Test
console.assert(1 === 2, "Commentaire de l'assert");

// Texte stylisé
console.log("%c TEXTE STYLISE", "color:red; font-size:30px;");

// Mesure du temps d'execution
console.time('temps');
methodeATester();
console.timeEnd('temps');