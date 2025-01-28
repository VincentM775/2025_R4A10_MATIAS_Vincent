// Tableaux 
console.log("\n-- Tableaux --");
const tableau = [1, 2, 3];
const tableau2 = Array.from({ length: 3 }, (_, i) => i + 1); // Une autre façon, plus dynamique, de créer un tableau, avec une callback de mapping
const tableau3 = Array(3).fill(0).map((_, i) => i + 1); // autre équivalent, pour briller sur des one-liners en entretien (ne faites pas ça)

console.log("Type de tableau: ", typeof tableau); // donnera "object"
console.log("Type de tableau: ", Array.isArray(tableau)); // donnera "true"
console.log("Longueur du tableau: ", tableau.length); // donnera 3
console.log("Premier élément du tableau: ", tableau[0]); // donnera 1
console.log("Dernier élément du tableau: ", tableau[tableau.length - 1]); // donnera 3

// Parcours du tableau -- Comme pour les chaines de caractères, on peut utiliser for, for...in et for...of
for (let i = 0; i < tableau.length; i++) {
  console.log(tableau[i]);
}

for (let index in tableau) {
  console.log(tableau[index]);
}

for (const element of tableau) {
  console.log(element);
}

// Recherche dans le tableau
console.log("-- Recherche dans le tableau --");

console.log("-- Utilisation de indexOf --");
console.log("Index de la valeur 2 dans le tableau: ", tableau.indexOf(2)); // donnera 1
console.log("Index de la valeur 4 dans le tableau: ", tableau.indexOf(4)); // donnera -1

console.log("-- Utilisation de includes --");
console.log("Le tableau contient la valeur 2: ", tableau.includes(2)); // donnera true
console.log("Le tableau contient la valeur 4: ", tableau.includes(4)); // donnera false

console.log("-- Utilisation de some --");
console.log("Le tableau contient la valeur 2: ", tableau.some(element => element === 2)); // donnera true
console.log("Le tableau contient la valeur 4: ", tableau.some(element => element === 4)); // donnera false

console.log("-- Utilisation de find --");
console.log("Premier élément du tableau supérieur à 1: ", tableau.find(element => element > 1)); // donnera 2
console.log("Premier élément du tableau supérieur à 3: ", tableau.find(element => element > 3)); // donnera undefined


// Méthodes qui font muter le tableau -- Attention, elles ne retournent pas de nouveau tableau
tableau.push(4); // Ajout de 4 à la fin du tableau
tableau.unshift(0); // Ajout de 0 au début du tableau
console.log("Tableau après ajout: ", tableau); // donnera [0, 1, 2, 3, 4]

tableau.pop(); // Suppression du dernier élément du tableau
tableau.shift(); // Suppression du premier élément du tableau
console.log("Tableau après suppression: ", tableau); // donnera [1, 2, 3]

tableau.reverse(); // Inversion du tableau
console.log("Tableau inversé: ", tableau); // donnera [3, 2, 1]

tableau.sort((a, b) => a - b); // Tri du tableau de nombres, croissant, b - a pour décroissant
["Banane", "Pomme", "Fraise"].sort((a, b) => a.localeCompare(b)); // Tri du tableau de chaines de caractères, localeCompare permet de prendre en compte la langue si besoin

console.log("Tableau trié: ", tableau); // donnera [1, 2, 3]


// Méthodes qui ne mutent pas le tableau -- Elles retournent un nouveau tableau
console.log("-- Concat --");
const tableau4 = tableau.concat([4, 5]); // Concaténation de deux tableaux
console.log("Tableau original: ", tableau); // donnera [1, 2, 3]
console.log("Tableau concaténé: ", tableau4); // donnera [1, 2, 3, 4, 5]

console.log("-- Slice --");
const tableau5 = tableau.slice(1, 3); // Extraction d'une partie du tableau (de l'index 1 inclus à l'index 3 non inclus)
console.log("Tableau original: ", tableau); // donnera [1, 2, 3]
console.log("Tableau extrait: ", tableau5); // donnera [2, 3]

console.log("-- Filter --");
const tableau6 = tableau.filter(element => element > 1); // Filtrage du tableau
console.log("Tableau original: ", tableau); // donnera [1, 2, 3]
console.log("Tableau filtré: ", tableau6); // donnera [2, 3]

console.log("-- Map --");
const tableau7 = tableau.map(element => element * 2); // Transformation du tableau
console.log("Tableau original: ", tableau); // donnera [1, 2, 3]
console.log("Tableau transformé: ", tableau7); // donnera [2, 4, 6]

console.log("-- Reduce --");
const somme = tableau.reduce((acc, element) => acc + element, 0); // Réduction du tableau
console.log("Tableau original: ", tableau); // donnera [1, 2, 3]
console.log("Somme des éléments du tableau: ", somme); // donnera 6

// Transformation d'un tableau en chaine de caractères
console.log("Tableau transformé en chaine: ", tableau.join(", ")); // donnera "1, 2, 3"

// Copier un tableau grâce à la déstructuration
const tableauCopie = [...tableau]; // attention, cela ne copie que le premier niveau du tableau, donc les Objets à l'intérieur ne seront pas copiés
console.log("Tableau copié: ", tableauCopie); // donnera [1, 2, 3]