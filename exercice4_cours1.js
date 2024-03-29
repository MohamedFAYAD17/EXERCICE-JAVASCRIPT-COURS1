class Batiment {
    constructor(adresse, prix, superficie) {
      this.adresse = adresse;
      this.prix = prix;
      this.superficie = superficie;
    }
  
    getadresse() {
      return this.adresse;
    }
  
    setadresse(newAdresse) {
      this.adresse = newAdresse;
    }
  
    getprix() {
      return this.prix;
    }
  
    setprix(newPrix) {
      this.prix = newPrix;
    }
  
    getsuperficie() {
      return this.superficie;
    }
  
    setsuperficie(newSuperficie) {
      this.superficie = newSuperficie;
    }
  
    affichage() {
      console.log(`Adresse: ${this.adresse}, Prix: ${this.prix}, Superficie: ${this.superficie}`);
    }
  }
  

class Maison extends Batiment {
    constructor(adresse, prix, superficie, nbEtages) {
      super(adresse, prix, superficie);
      this.nbEtages = nbEtages;
    }
  
    getnbEtages() {
      return this.nbEtages;
    }
  
    setnbEtages(newNbEtages) {
      this.nbEtages = newNbEtages;
    }
  
    affichage() {
      super.affichage();
      console.log(`Nombre d'étages: ${this.nbEtages}`);
    }
  }
  

class Appartement extends Batiment {
    constructor(adresse, prix, superficie, numeroEtage, nbChambres) {
      super(adresse, prix, superficie);
      this.numeroEtage = numeroEtage;
      this.nbChambres = nbChambres;
    }
  
    getnumeroEtage() {
      return this.numeroEtage;
    }
  
    setnumeroEtage(newNumeroEtage) {
      this.numeroEtage = newNumeroEtage;
    }
  
    getnbChambres() {
      return this.nbChambres;
    }
  
    setnbChambres(newNbChambres) {
      this.nbChambres = newNbChambres;
    }
  
    affichage() {
      super.affichage();
      console.log(`Numéro d'étage: ${this.numeroEtage}, Nombre de chambres: ${this.nbChambres}`);
    }
  }
  
maison1 = new Maison("123 Rue de la Maison", 500000, 200, 2);
maison1.affichage();
  
appartement1 = new Appartement("456 Avenue de l'Appartement", 200000, 100, 3, 2);
appartement1.affichage();
  