
class ExampleClassJS {
  publicAttribute;
  #privateAttribute;

  constructor(valeur1, valeur2) {
    this.publicAttribute = valeur1;
    this.#privateAttribute = valeur2;
  }

  // N'est pas très utile en dehors d'un besoin de consistantce car attributPublic est accessible publiquement
  getAttributPublic() {
    return this.publicAttribute;
  }

  // on peut définir un getter avec le mot clé get, on fera de même avec set pour un setter
  // En revanche le get ne peut pas partager le même nom que l'attribut
  // En revanche on appellera cette méthode comme une propriété et pas une fonction
  get privateAttribute() {
    return this.#privateAttribute;
  }
}

// comme JS ne s'intéresse pas aux types, je peux très bien instancier sans envoyer aucune valeur au constructeur
const maClasseJS = new ExampleClassJS();
maClasseJS.publicAttribute = 123;
console.log(maClasseJS.privateAttribute) // Comme expliqué au dessus, je l'appelle comme une simple propriété
