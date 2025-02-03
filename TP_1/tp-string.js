const email = "test.test@email.com";

module.exports = {
  // 1) Séparer l'email en deux parties au niveau du caractère '@', renvoyer le tableau correspondant
  Q1() {
    let result = email.split("@");
    return result;
    // Implémentation ici
  },

  // 2) Vérifier qu'il n'y a qu'un seul caractère '@' dans email. Renvoyer un booléen
  Q2() {
    let result =email.split("@").length == 2;
    return result;
     
    // Implémentation ici
  },

  // 3) Renvoyer l'index du caractère '@'
  Q3() {
    let result = email.indexOf("@");
    return result;
    // Implémentation ici
  },

  // 4) Renvoyer la sous-chaîne se situant après le caractère '@'
  Q4() {
    let result = email.split("@")[1];
    return result;
    // Implémentation ici
  },

  // 5) Renvoyer la variable en majuscule
  Q5() {
    let result =email.toUpperCase();
    return result;
    // Implémentation ici
  },

  // 6) Renvoyer le type de la variable email
  Q6() {
    let result= typeof email;
    return result;
    // Implémentation ici
  },

  // 7) Changez email.com par gmail.com, renvoyez la chaine modifiée
  Q7() {
    let result=email.replace("email.com", "gmail.com");
    return result;
    
    // Implémentation ici
  }
};