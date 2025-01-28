// Les Set et Map
console.log("\n-- Set et Map --");

// Set -- Idéal pour stocker des valeurs uniques -- ne pas utiliser avec des objets pour éviter les problèmes de références (JS et la gestion de mémoire...)
console.log("-- Set --");
const set = new Set();
set.add(1);
set.add(2);
set.add(1); // Ne sera pas ajouté car déjà présent
console.log("Set: ", set); // donnera Set(2) { 1, 2 }

console.log("Set contient 1: ", set.has(1)); // donnera true
console.log("Set contient 3: ", set.has(3)); // donnera false

set.delete(1);
console.log("Set après suppression: ", set); // donnera Set(1) { 2 }

// Map -- Pour faire simple c'est comme les objets, mais avec des différences de performances
console.log("-- Map --");
const map = new Map();
map.set("cle", "valeur");
map.set("cle", "nouvelleValeur"); // Remplace la valeur précédente
console.log("Map: ", map); // donnera Map(1) { "cle" => "nouvelleValeur" }

console.log("Valeur de la clé: ", map.get("cle")); // donnera "nouvelleValeur"
console.log("Map contient la clé: ", map.has("cle")); // donnera true

map.delete("cle");
console.log("Map après suppression: ", map); // donnera Map(0) {}

// Pour parcourir toutes les entrées de la map, corespond pour un objet {} à Object.entries
map.forEach((value, key) => {
  console.log("Clé", key, "Valeur", value)
})

// l'iterateur doit ensuite être parcouru avec une boucle, l'idée est d'avoir une question de performance avec de la lazy evaluation
const iter = map.entries();

// WeakSet et WeakMap -- Pour éviter les problèmes de références -- jamais utilisé depuis que je développe

// WeakSet -- Idéal pour stocker des objets -- ne pas utiliser avec des valeurs primitives
console.log("-- WeakSet --");
const weakSet = new WeakSet();
const objet = { key: "value" };
weakSet.add(objet);
console.log("WeakSet: ", weakSet); // donnera WeakSet { {key: "value"} }

console.log("WeakSet contient l'objet: ", weakSet.has(objet)); // donnera true

weakSet.delete(objet);
console.log("WeakSet après suppression: ", weakSet); // donnera WeakSet {}

// WeakMap -- Idéal pour stocker des objets -- ne pas utiliser avec des valeurs primitives
console.log("-- WeakMap --");
const weakMap = new WeakMap();
const objet2 = { key: "value" };
weakMap.set(objet2, "valeur");
console.log("WeakMap: ", weakMap); // donnera WeakMap { {key: "value"} => "valeur" }

console.log("Valeur de la clé: ", weakMap.get(objet2)); // donnera "valeur"

weakMap.delete(objet2);
console.log("WeakMap après suppression: ", weakMap); // donnera WeakMap {}

// Les WeakSet et WeakMap sont utilisés pour éviter les problèmes de références, car ils ne sont pas pris en compte par le garbage collector
