// Manipulation des String
const chaine2 = "Bonjour";
console.log("Longueur de la chaine: ", chaine2.length); // donnera 7
console.log("Premier caractère de la chaine: ", chaine2[0]); // donnera "B"


// Trois façons de parcourir la chaine avec for, les deux premières sont équivalentes
for (let i = 0; i < chaine2.length; i++) {
  console.log(chaine2[i]);
}

for (let index in chaine2) {
  console.log(chaine2[index]);
}

// Ici on récupèrera directement la valeur du caractère, non l'index
for (const caractere of chaine2) {
  console.log(caractere);
}

// Quelques méthodes utiles
console.log("Chaine en majuscule: ", chaine2.toUpperCase()); // donnera "BONJOUR"
console.log("Chaine en minuscule: ", chaine2.toLowerCase()); // donnera "bonjour"
console.log("Index de 'o': ", chaine2.indexOf("o")); // donnera 1
console.log("Dernier index de 'o': ", chaine2.lastIndexOf("o")); // donnera 4
console.log("Index de 'z': ", chaine2.indexOf("z")); // donnera -1
console.log("Chaine avec 'jour' remplacé par 'soir': ", chaine2.replace("jour", "soir")); // donnera "Bonsoir"
console.log("Chaine avec les espaces en moins: ", " Bonjour ".trim()); // donnera "Bonjour"
console.log("Chaine séparée par les espaces: ", "Bonjour tout le monde".split(" ")); // donnera ["Bonjour", "tout", "le", "monde"]
console.log("Chaine commencant par 'Bon': ", chaine2.startsWith("Bon")); // donnera true
console.log("Chaine finissant par 'jour': ", chaine2.endsWith("jour")); // donnera true

// Interpolation de chaine
console.log("\n-- Interpolation de chaine --");
const nom = "Dupont";
const prenom = "Jean";
console.log(`Bonjour ${nom} ${prenom}`); // donnera "Bonjour Dupont Jean"

// Une chaine est immutable donc...
const chaine3 = "Bonjour";
chaine3[0] = "b"; // ne fonctionnera pas
console.log('La chaine est immutable:', chaine3); // donnera "Bonjour"
