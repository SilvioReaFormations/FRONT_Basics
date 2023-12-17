// Créer une promesse
/*
    Le constructeur d'une promesse reçoit en paramètre une Lambda.
    Cette lambda reçoit en paramètre 2 fonction "resolve" ou "reject" appelé en cas de succès ou d'echec
    Une promesse resolve va passer dans le THEN et une reject va passer dans le CATCH
*/
let p = new Promise((resolve, reject) => { 

    // Simuler aléatoirement un succès ou un echec:
    let result = Math.random() < 0.5;

    // Attendre 2 sec avant de décider si succès ou echec, et transmettre la VALEUR D'ABOUTISSEMENT
    setTimeout( () => result ? resolve("OK") : reject("KO")
                , 2000 );
})
.then( val => console.log("SUCCES") )
.catch( val => console.log("ECHEC") );