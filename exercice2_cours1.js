class Proprietaire {
    constructor(nom, prenom, age, cin) {
      this.nom = nom;
      this.prenom = prenom;
      this.age = age;
      this.cin = cin;
    }

    getnom() {
        return this.nom;
      }
    
    setnom(newNom) {
        this.nom = newNom;
    }

    getprenom() {
        return this.prenom;
      }
    
    setprenom(newPrenom) {
        this.prenom = newPrenom;
    }

    getage() {
        return this.age;
    }
    
    setniveau(newAge) {
        this.age = newAge;
    }
    
    getcin() {
        return this.cin;
    }
    
    setcin(newCIN) {
        this.cin = newCIN;
    }

    affichage() {
      return(console.log(`Propriétaire : ${this.prenom} ${this.nom}, âge : ${this.age}, CIN : ${this.cin}`));
    }
  
    equal(otherProprietaire) {
      return this.cin == otherProprietaire.cin;
    }
  }
  
class Maison {
    constructor(adresse, nbEtages, nbChambres) {
      this.adresse = adresse;
      this.nbEtages = nbEtages;
      this.nbChambres = nbChambres;
    }
  
    affichage() {
      return(console.log(`Adresse de la maison : ${this.adresse}, Nombre d'étages : ${this.nbEtages}, Nombre de chambres : ${this.nbChambres}`));
    }
  }
  
proprietaire1 = new Proprietaire("HAJHOUJ", "Reda", 29, "ABC123");
proprietaire2 = new Proprietaire("BALE", "Gareth", 34, "DEF456");
  
proprietaire1.affichage();
proprietaire2.affichage();
  
console.log("Comparaison des propriétaires : ", proprietaire1.equal(proprietaire2));
  
maison1 = new Maison("123 Rue de la Maison", 2, 4);
maison2 = new Maison("456 Avenue de la Maison", 1, 3);
  
maison1.affichage();
maison2.affichage();
  