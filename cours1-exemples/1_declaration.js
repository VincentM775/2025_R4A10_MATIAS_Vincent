// Déclaration de variables et types primitifs
const nombre = 1;
console.log("Nombre:", nombre, "Type de nombre: ", typeof nombre); // donnera "number"

const chaine = "Bonjour";
console.log("Chaine:", chaine, "Type de chaine: ", typeof chaine); // donnera "string"

const estVrai = true;
console.log("Est vrai: ", estVrai, "Type de estVrai: ", typeof estVrai); // donnera "boolean"

let undefini;
console.log("undefini", undefini, "Type de undefini: ", typeof undefini); // donnera "undefined"

let nul = null;
console.log("nul", nul, "Type de nul: ", typeof nul); // donnera "object"

// Type de déclaration
var variable = "Bonjour"; // déclaration de variable avec var (déconseillé) - variable globale et mutable

let variableLocaleMutable = "Bonjour"; // déclaration de variable avec let - variable locale et mutable
variableLocaleMutable = 10; // maintenant c'est un nombre qui vaut 10

const constante = "Bonjour"; // déclaration de variable avec const - variable locale et immuable -> Donc une constante
