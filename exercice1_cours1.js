class Etudiant {
    constructor(cne, nom, prenom, niveau) {
      this.cne = cne;
      this.nom = nom;
      this.prenom = prenom;
      this.niveau = niveau;
    }

    getcne() {
        return this.cne;
    }
    
    setcne(newCNE) {
        this.cne = newCNE;
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

    getniveau() {
        return this.niveau;
    }
    
    setniveau(newNiveau) {
        this.niveau = newNiveau;
    }

    affichage() {
        return("Étudiant :"+ this.nom +" "+ this.prenom + ", "+"CNE :"+this.cne +", "+ "Niveau :"+this.niveau);
    }

    equal(otherEtudiant) {
        return this._cne == otherEtudiant.cne;
    }
}

etudiant1 = new Etudiant("12345", "Fayad", "Mohamed", "BAC +1");
etudiant2 = new Etudiant("54321", "OMARI", "Ahmed", "BAC +5");

console.log(etudiant1.affichage());
console.log(etudiant2.affichage());

console.log(etudiant1.getnom());
console.log(etudiant1.setnom("FAYAD"));
console.log(etudiant1.affichage());

console.log("Comparaison des étudiants : ", etudiant1.equal(etudiant2));