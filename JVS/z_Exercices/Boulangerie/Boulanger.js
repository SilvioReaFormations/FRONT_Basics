class Boulanger {

    constructor(name){
        this.name=name;
        this.fabrication = [];
    }

    fabriquer(produit, quantite){
        for(i=0; i<quantite; i++){
            this.fabrication.push(new Fabrication(produit, quantite));
        }
    }

    bilan(){
        console.log(`${this.name} a fabriqué ${this.fabrication.length} produit`)
    }
}