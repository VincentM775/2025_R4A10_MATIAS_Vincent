// Objets
console.log("\n-- Objets --");
const objet = { cle: "valeur", complexe: { sousCle: "sousValeur" } };

console.log("Type d'objet: ", typeof objet); // donnera "object"
console.log("Objet est un tableau? ", Array.isArray(objet)); // donnera "false"

console.log("Valeur de la clé: ", objet.cle); // donnera "valeur"
console.log("Valeur de la clé: ", objet["cle"]); // donnera "valeur"

// Ajout d'une nouvelle clé
objet.nouvelleCle = "nouvelleValeur";
console.log("Objet après ajout: ", objet); // donnera { cle: "valeur", nouvelleCle: "nouvelleValeur", complexe: { sousCle: "sousValeur" } }

// Suppression d'une clé
delete objet.nouvelleCle;
console.log("Objet après suppression: ", objet); // donnera { cle: "valeur", complexe: { sousCle: "sousValeur" } }

//savoir si une clé donée est dans un objet
console.log("cle" in objet);

// Parcours de l'objet
for (const cle in objet) {
  console.log("Clé: ", cle, "Valeur: ", objet[cle]);
}
// Idem
Object.entries(objet).forEach(([key, value]) => console.log("Clé: ", key, "Valeur: ", value));

// Un peu plus avancé -- gardez le sous le coude mais ne vous attardez pas trop dessus pour l'instant

// Copie d'un objet grâce à la déstructuration
console.log("-- Copie d'un objet grâce à la déstructuration, avec modification de référence --");
const objetCopie = { ...objet }; // attention, cela ne copie que le premier niveau de l'objet, donc les Objets à l'intérieur ne seront pas copiés
objetCopie.complexe.sousCle = "nouvelleSousValeur";
// Ici vous avez cassé votre objet original car un objet est passé par référence
console.log("Objet copié: ", objetCopie); // donnera { cle: "valeur", complexe: { sousCle: "nouvelleSousValeur" } }
console.log("Objet original après modification de la copie: ", objet); // donnera { cle: "valeur", complexe: { sousCle: "nouvelleSousValeur" } }

// Copie d'un objet grâce à JSON
console.log("-- Copie d'un objet grâce à la déstructuration, sans modification de référence --");
const objetComplexe = { cle: { sousCle: "sousValeur" } };
const objetCopie2 = JSON.parse(JSON.stringify(objetComplexe));

console.log("Objet copié: ", objetCopie2); // donnera { cle: { sousCle: "sousValeur" } }
objetComplexe.cle.sousCle = "nouvelleSousValeur";

console.log("Objet copié après modification de l'original: ", objetCopie2); // donnera { cle: { sousCle: "sousValeur" } }
console.log("Objet original après modification: ", objetComplexe); // donnera { cle: "nouvelleSousValeur" 

// Le JS Moderne permet de faire ça plus simplement
console.log("-- Copie d'un objet grâce à la déstructuration, sans modification de référence -- Structured Clone --");
const objetCopie3 = structuredClone(objetComplexe);
console.log("Objet copié: ", objetCopie3); // donnera { cle: { sousCle: "sousValeur" } }
objetComplexe.cle.sousCle = "nouvelleSousValeur";

console.log("Objet copié après modification de l'original: ", objetCopie3); // donnera { cle: { sousCle: "sousValeur" } }
console.log("Objet original après modification: ", objetComplexe); // donnera { cle: "nouvelleSousValeur"