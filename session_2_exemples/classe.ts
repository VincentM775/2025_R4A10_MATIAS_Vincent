class ExampleClassTS {
  public publicAttribute;
  private readonly privateAttribute; // Si je ne compte jamais le réaffecter, je peux marquer readonly.

  constructor(value1: number, value2: number) {
    this.publicAttribute = value1;
    this.privateAttribute = value2;
  }

  // N'est pas très utile en dehors d'un besoin de consistantce car attributPublic est accessible publiquement
  getAttributPublic() {
    return this.publicAttribute;
  }

  setAttributPublic(value: number) {
    this.publicAttribute = value;
  }

  getAttributPrive() {
    return this.privateAttribute;
  }
}

// Ici, si je ne déclare pas mes arguments comme optionnels, TS envoie une erreur si je ne mets rien dans mon constructeur
// Mes arguments doivent respecter les types définis dans le constructeur
const exampleClassTS = new ExampleClassTS(0, 0);

// Equivalents pour du public
exampleClassTS.publicAttribute = 123;
exampleClassTS.setAttributPublic(125);

// En TS on peut définir les propriétés directement dans le constructeur
// Dans ce cas il faut toujours préciser la portée de l'attribut
class ExempleClassTS2 {
  constructor(public publicAttribute: number, private readonly privateAttribute: number) {}
}
