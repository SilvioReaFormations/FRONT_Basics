// IF, ELSE IF, ELSE comme en JAVA


// SWITCH

switch(x){
    case 5: console.log("x vaut 2");
    break;
    case 7: console.log("x vaut 7");
    break;
    default : console.log("x ne vaut ni 2, ni 3");
}


/* SHORT CIRCUIT OPERATOR : Permets, dans une variable 
    de définir un autre résultat en fonction d'une condition */
    function moyenne(prenom, ...notes){
        let somme = 0;
        for (const element of notes) {
            somme += element;
        }
    
        /* short circuit operator ici : 
            Moyenne sera égale à somme/notes.length OU 0 */
        let moyenne = (somme / notes.length) || 0;
        console.log(`${prenom} a ${moyenne} de moyenne.`)
    }


