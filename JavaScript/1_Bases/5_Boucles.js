// Boucles FOR, WHILE, DO WHILE identiques à JAVA



// FOR IN  => Itérer sur OBJECT : 

let object =  {
    nom : "Silvio",
    prenom : "REA",
    age : 37,
    mariage : true
}

for (let key in object) {
    console.log(key + " => " + object[key]);
}




// FOR OF => Itérer sur ARRAY :

let meAsArray = ["Bonjour ", "j'ai ", 37, " ans"];

function createAndDisplayMessage(array){

    let message = "";
    for (let indexValue of array) {
        message += indexValue;
    }
    console.log(message);
    console.log("OK");
}

createAndDisplayMessage(meAsArray);


