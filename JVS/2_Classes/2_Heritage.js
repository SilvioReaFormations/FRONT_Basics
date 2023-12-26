class StyloBille extends Stylo {

    constructor(maque, couleur){
        super(marque);
        this.couleur=couleur;
    }

    fuir(){
        console.log(`une couleur ${couleur} sort du stylo`)
    }

}

// DANS LE MAIN
let styloBille = new StyloBille("BIC", "rouge");
styloBille.ecrire