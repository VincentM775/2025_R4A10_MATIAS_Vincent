// Structures de contrôle - if
console.log("\n-- If --");
const age = 18;
if (age >= 18) {
  console.log("Majeur");
} else {
  console.log("Mineur");
}

// Structures de contrôle - ternaire
const estMajeur = age >= 18 ? "Majeur" : "Mineur";
console.log(estMajeur);

// Egalité stricte
const nombre1 = 1;
const nombre2 = "1";

// L'égalité non stricte ne requiert pas que les valeurs soient de même type
if (nombre1 == nombre2) {
  console.log("Sera affiché car 1 et '1' sont égaux en valeur");
}

// L'égalité stricte requiert que les valeurs soient de même type - ce qui n'est pas le cas ici
if (nombre1 === nombre2) {
  console.log("Ne sera pas affiché car 1 et '1' ne sont pas égaux en type");
}

// Structures de contrôle - switch
console.log("\n-- Switch --");
const jour = "lundi";
switch (jour) {
  case "lundi":
    console.log("C'est lundi");
    break;
  case "mardi":
    console.log("C'est mardi");
    break;
  default:
    console.log("C'est un autre jour");
}

// Structures de contrôle - for
console.log("-- For --");
for (let i = 0; i < 3; i++) {
  console.log(i);
}


// Structures de contrôle - while
console.log("\n-- While --");
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
