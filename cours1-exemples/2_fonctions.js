
// Fonctions
// Déclaration de fonction avec function -- Hoisting prévu par JS (déplacement de la déclaration en haut du fichier)
function direBonjour() {
  console.log("Bonjour");
}

// Déclaration de fonction avec fonction fléchée -- Pas de Hoisting
const sayHello = () => console.log("Hello");

// Appel de fonction
direBonjour();
sayHello();

// Je peux appeler addition avant sa déclaration grâce au hoisting
const resultat = addition(1, 2);

// Fonction avec paramètres
function addition(a, b) {
  return a + b;
}

console.log("Résultat de l'addition: ", resultat);
