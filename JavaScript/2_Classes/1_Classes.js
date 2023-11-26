/* EN JS, pas de propriété déclarée dans le corp de la classe comme en JAVA, 
il y a seulement des méthodes de déclarées dans le corp de la classe.
Les propriétés sont déclarées directement dans le constructeur */

class Stylo {

    constructor(marque) {
        // Propriétée de classe = > Valable uniquement pour l'instance (this)
        this.marque = marque;

        // Propriété STATIQUE => Valable pour TOUTES les instances (Stylo avec "S" Maj)
        if (Stylo.nombre === undefined){
            Stylo.nombre = 0;
        }
        Stylo.nombre++
    }


    // Methode de classe
    ecrire() {
        console.log(`Le stylo ${this.marque} écrit`)
    }

    // Méthode STATIQUE
    static decompte(){
        console.log(`il y a ${Stylo.nombre} stylos`)
    }
}


// DANS LE MAIN //

let stylo = new Stylo("BIC");
let stylo2 = new Stylo("PLUME")

let marqueDuStylo = stylo.marque;

stylo.ecrire();     // "Le stylo BIC écrit"
stylo.decompte()    // "il y a 2 stylos"

