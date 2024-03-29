class Produit {
    constructor(reference, prix, quantite) {
      this.reference = reference;
      this.prix = prix;
      this.quantite = quantite;
    }
  
    getreference() {
      return this.reference;
    }
  
    setreference(newReference) {
        this.reference = newReference;
    }

    getprix() {
      return this._prix;
    }
  
    setprix(newPrix) {
        this.prix = newPrix;
      }

    getquantite() {
      return this.quantite;
    }

    setquantite(newQuantite) {
      this.quantite = newQuantite;
    }
  
    affichage() {
        console.log(`Référence: ${this.reference}, Prix: ${this.prix}, Quantité: ${this.quantite}`);
    }
  }
    

class Medicament extends Produit {
    constructor(reference, prix, quantite, molecule) {
      super(reference, prix, quantite);
      this.molecule = molecule;
    }

    getmolecule() {
      return this.molecule;
    }
  
    setmolecule(newMolecule) {
      this.molecule = newMolecule;
    }
    
    getreference() {
        return this.reference;
      }
    
    setreference(newReference) {
          this.reference = newReference;
    }

    affichage() {
      super.affichage();
      console.log(`Molécule: ${this.molecule}`);
    }
  }
  

class ParaPharm extends Produit {
    constructor(reference, prix, quantite, type) {
      super(reference, prix, quantite);
      this.type = type;
    }
  
    gettype() {
      return this.type;
    }
  
    settype(newType) {
      this.type = newType;
    }
  
    affichage() {
      super.affichage();
      console.log(`Type: ${this.type}`);
    }
  }
  
  
medicament1 = new Medicament("M001", 10, 50, "Paracétamol");
medicament1.affichage();
  
paraPharm1 = new ParaPharm("P001", 5, 100, "Crème");
paraPharm1.affichage();
  