// Les classes -- En réalité en JS ce sont aussi des objets mais avec une syntaxe plus simple pour la POO
console.log("\n-- Classes --");

class Personne {
  constructor(nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
  }

  direBonjour() {
    console.log("Bonjour", this.nom, this.prenom);
  }
}

// JS est un langage à prototype, aussi l'ancienne syntaxe pour attacher des fonctions à un objet s'écrit comme suit (inutilisé aujourd'hui)
Personne.prototype.manger = function () {
  console.log(this.nom, "mange")
}

const personne = new Personne("Dupont", "Jean");
personne.direBonjour();
personne.manger();

// Héritage
class Employe extends Personne {
  constructor(nom, prenom, poste) {
    super(nom, prenom); // Appel du constructeur de la classe parente
    this.poste = poste;
  }

  direBonjour() {
    console.log(`Bonjour ${this.nom} ${this.prenom}, je suis ${this.poste}`);
  }
}

const employe = new Employe("Dupont", "Jean", "Développeur");
employe.direBonjour();

