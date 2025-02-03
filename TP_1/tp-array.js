
// Pour ce fichier, toutes les questions à partir de Q1 nécessitent d'appeler cette fonction pour récupérer sa valeur
function getArray() {
  return [12, 7, 6, 15, 41, 24, 13];
}

module.exports = {
  // Renvoyer la valeur true depuis la fonction
  Q0() {
    return true;
  },

  //1) Récupérer le tableau depuis getArray() et renvoyer un nouveau tableau ne contenant que les valeurs supérieures ou égales à 15 
  // en utilisant une méthode de tableau
  Q1() {
    const tab = getArray();
    const result = tab.filter((value) => value >= 15);
    return result;
    // Implémentation ici
  },

  //2) Renvoyer l'index de la première valeur strictement inférieure à 7
  Q2() {
    const tab = getArray();
    const result = tab.findIndex((value) => value < 7);
    return result;
    // Implémentation ici
  },

  //3) Inverser le tableau en utilisant une méthode spécifiquement prévue à cet effet. Renvoyez ce tableau inversé
  Q3() {
    const tab = getArray();
    const result = tab.reverse();
    return result;
    // Implémentation ici
  },

  //4) Trier le tableau dans l'ordre croissant, renvoyez le tableau trié
  Q4() {
    const tab = getArray();
    const result = tab.sort((a, b) => a - b);
    return result;
    // Implémentation ici
  },

  //5) Ajouter la valeur 0 en premier index du tableau, renvoyez le tableau modifié
  Q5() {
    const tab = getArray();
    tab.unshift(0);
    
    return tab;
    // Implémentation ici
  },

  //6) Faire la somme des éléments du tableau avec une boucle for. Renvoyez la somme
  Q6() {
    const tab = getArray();
    let result = 0;
    for (let i = 0; i < tab.length; i++) {
      result += tab[i];
    }
    return result;
    // Implémentation ici
  },

  //7) Faire la somme des éléments du tableau avec une méthode spécifique de tableau (reduce), renvoyez la somme
  Q7() {
    const tab = getArray();
    const result = tab.reduce((addi, value) => addi + value, 0);
    return result;
    // Implémentation ici
  },

  //8) Remplacer la troisième valeur du tableau par "ici", renvoyez le tableau
  Q8() {
    const tab = getArray();
    tab.splice(2,1,"ici");
    return tab;

    // Implémentation ici
  },

  //9) Retirer le dernier index, renvoyez le tableau
  Q9() {
    const tab = getArray();
    tab.pop();
    return tab;
    // Implémentation ici
  },

  //10) Renvoyez le type de la variable ARRAY
  Q10() {
    return typeof getArray();
    // Implémentation ici
  },

  //11) En utilisant une méthode spécifique aux tableaux, renvoyer un booléen vérifiant que le résultat de getArray() est bien un tableau
  Q11() {
    const tab = getArray();
    return Array.isArray(tab);
    // Implémentation ici
  },

  //12) Renvoyer le tableau sous forme de chaîne de caractère où les éléments sont séparés par un tiret (-)
  Q12() {
    const tab = getArray();
    const result = tab.join("-");
    return result;
    // Implémentation ici
  },

  //13) Renvoyer le tableau en gardant uniquement les 2 derniers éléments
  Q13() {
    const tab = getArray();
    const result = tab.slice(-2);
    return result;
    // Implémentation ici
  }
};
