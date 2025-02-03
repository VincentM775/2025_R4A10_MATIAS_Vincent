// Toutes les questions doivent faire appel à cette fonction
// Chaque question est indépendante, et se base sur ce tableau initial
function getEmployees() {
  return [
    { name: "Thomas", age: "30" },
    { name: "Theo", age: "25" },
    { name: "Philippe", age: "45" },
    { name: "Jeremy", age: "28" },
    { name: "Minnie", age: "50" },
  ];
}

module.exports = {
  // 1) Renvoyer un nouveau tableau qui ne garde que les personnes dont le nom se termine par un "e"
  B1() {
    const tab = getEmployees();
    const result = tab.filter((value) => value.name.endsWith("e"));
    return result;
    // Implémentation ici
  },

  // 2) Trouver la première personne dont l'âge est inférieur à 30
  B2() {
    const tab = getEmployees();
    const result = tab.filter((value)=> value.age < 30);
    return result[0];
    
    // Implémentation ici
  },

  // 3) Renvoyer l'index où se trouve "Jeremy"
  B3() {
    const tab = getEmployees();
    return tab.findIndex((value) => value.name === "Jeremy");
    // Implémentation ici
  },

  // 4) Trier le tableau par âge des personnes
  B4() {
    const tab = getEmployees();
    return tab.sort((a, b) => a.age - b.age);
    // Implémentation ici
  },

  // 5) Ajouter Kasimu à la fin du tableau, il a 38 ans, et renvoyer le tableau modifié
  B5() {
    let tab = getEmployees();
    tab.push({ name: "Kasimu", age: 38 });
    return tab;
    // Implémentation ici
  },

  // 6) Renvoyer la longueur du tableau
  B6() {
    const tab = getEmployees();
    return tab.length;
    // Implémentation ici
  },

  // 7) Remplacer le "o" de Theo par un "a", et renvoyer le tableau modifié
  B7() {
    const tab = getEmployees();
    const result = tab.map((value) => {
      if (value.name === "Theo") {
        value.name = "Thea";
      }
      return value;
    });
    return result;
    // Implémentation ici
  },

  // 8) Renvoyer un tableau qui ne contient que les personnes ayant au moins un "e" dans leur nom
  B8() {
    const tab = getEmployees();
    const result = tab.filter((value)=> value.name.includes("e"));
    return result;
    // Implémentation ici
  },
};