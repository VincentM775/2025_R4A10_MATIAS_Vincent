**# Scénario : Le Stage Chez Mario, Maître Pizzaiolo**

---

## **Benvenuto Chez Mario !**

Après des mois de recherches intensives, des candidatures sans réponse, et des entretiens interminables, tu as enfin trouvé un stage !

Te voici fraîchement embauché chez **Mario**, un pizzaiolo de renom dont les recettes de pizza ont fait le tour du monde. Son restaurant attire des clients par dizaines chaque jour, et son application permettait aux gourmands de commander leurs pizzas favorites en ligne...

**MAIS MAMMA MIA !**

Le développeur précédent, avant de partir travailler pour **Domino’s**, a saboté l’application. Un vrai carnage. L'interface est brisée, les commandes ne passent plus, et même les pizzas refusent de s'afficher correctement.

**C'est à toi de sauver l'application et d'aider Mario à retrouver son empire pizzeria !**

---

## **Mission 1 : Réparer l’application (4 points)**

Mario a tenté de relancer l’application, mais une erreur est apparue :

> _"NG9: Property 'order' does not exist on type 'OrderCardComponent'."_

**C'est un véritable cauchemar !** Mario est paniqué. Il se souvient que tout fonctionnait avant, mais le développeur a laissé des dégâts.

### **Ta mission :**

1. **Restaurer la communication entre les composants.** Le contenu de la commande doit bien être envoyé à la carte de commande afin d'éviter cette erreur.
2. **Réparer le bouton supprimer**. Chaque carte comporte un bouton pour retirer une commande, mais le parent ne reçoit plus cette information. Il faut faire en sorte que l’ID de la commande soit correctement transmis.

---

## **Mission 2 : Remettre en ordre le Router (4 points)**

Mario a beau redémarrer son application, la page principale ne charge pas les pizzas. Seuls le header et le footer apparaissent.

**Mamma mia, où sont passées mes belles pizzas ?!**

### **Objectifs :**

1. **Réparer la configuration du router** pour que la liste des pizzas apparaisse correctement.
2. **Corriger la redirection vers la page "Commander"**, qui renvoie actuellement une 404.
3. **Corriger le lien "Nos pizzas"**, qui semble avoir une erreur d’URL et qui doit rediriger vers la liste des pizzas.
4. **Corriger les propriétés des liens** pour qu’elles respectent les standards Angular.

---

## **Mission 3 : Afficher la bonne pizza (7 points)**

Désormais, la navigation fonctionne, mais un problème persiste : peu importe la pizza que l’on sélectionne, c’est toujours la même qui s’affiche. **Che disastro !**

### **Actions à mener :**

1. **Centraliser les pizzas.** La liste des pizzas doit être accessible sur toutes les pages.
2. **Définir un type Pizza.** Il faut un type clair pour s’assurer que chaque pizza a bien ses propriétés.
3. **Afficher la pizza correcte.** Récupérer dynamiquement le nom de la pizza depuis l’URL et afficher celle correspondante. Si elle n’existe pas, rediriger vers une 404. Il faudra certainement modifier un peu la chaîne pour faire une comparaison. Si un nom de pizza comporte un espace, il est transformé en "-" dans son url. Exemple: Une pizza nommée "Quatre Saisons" aurait pour slug quatre-saisons
4. **Moderniser le HTML.** L’affichage des ingrédients ne respecte pas les standards Angular, et le code semble être une horreur générée par une IA. Adapte le template html de la page permettant de visualiser une seule pizza avec des standards Angular modernes. D'autant que dans son état actuel, la page n'affiche pas toute les informations.
5. **Corriger le bouton "Commander maintenant"** afin qu’il redirige bien vers la page de commande.

---

## **Mission 4 : Refaire le formulaire de commande (3 points)**

Le formulaire de commande est un désastre. Impossible de commander une pizza ! **Mario est au bord de la crise de nerfs.**

### **Champs à implémenter :**

- **Pizza** : Une sélection parmi les pizzas existantes.
- **Taille** : Medium, Large ou XXL.
- **Moyen de paiement** : Espèces, Carte Bleue ou Bitcoin.
- **Adresse email** : Avec une validation stricte du fait que c'est bien un email.

Tous ces champs sont obligatoires. Une fois le formulaire soumis, il doit appeler le **OrderService** pour enregistrer la commande.

_(Choix libre entre template-driven et reactive forms)_

---

## **Mission 5 : Rendre le service de commande plus fiable (2 points)**

Mario remarque un autre souci : en naviguant rapidement entre les pages, l’application finit par mal gérer les commandes, et elle ralentit, sûrement un problème dans la gestion des données.

**Mario lève les bras au ciel : "Non, non, non ! Ce n’est pas possible !"**

### **Actions à mener :**

1. **Corriger les Observables** du **OrderService** pour éviter ces problèmes de fiabilité.
2. **Préparer la transition vers une API Flask.** L’API sera bientôt disponible, mais il faut déjà créer un **OrderAPIService** qui implémente **OrderService** et utilise le client HTTP.

L’API aura les routes suivantes :

- `GET /orders`
- `POST /orders` (avec un body de type `CreateOrder`)
- `DELETE /orders/:id`

L’URL du serveur (fictif) sera **http://localhost:5000/api**. Les entrées et réponses suivront les mêmes types que celles de **OrderLocalService**.

Mario fera le test directement avec le nouveau service, il ne faudra bien que toutes les dépendances soient appelables.

---

## **Conclusion**

Si tu arrives à réparer tout ça, Mario pourra enfin retrouver la gloire de sa pizzeria en ligne, et toi, tu auras prouvé ta valeur en tant que développeur. Qui sait, peut-être que ton stage deviendra un CDI... à condition que tu ne partes pas chez Domino’s à ton tour !
