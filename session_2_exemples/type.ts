type Person = {
  age: number;
  firstName: string;
  lastName: string;
  isSubscribed?: boolean; // rend une propriété optionnelle dans l'objet
  dateOfBirth: Date; // le type Date vient de JS et vous servira à faire des manipulations sur des dates, l'API est assez complète
};

const person: Person = {
  age: 32,
  firstName: 'John',
  lastName: 'Doe',
  isSubscribed: true,
  dateOfBirth: new Date('1980-12-05'),
};

type PersonWithAllFacultative = Partial<Person>; // rend toutes les propriétés optionnelles
const facultative: PersonWithAllFacultative = {};

type StringOrNumber = string | number; // On peut faire une union de type, pour dire qu'une valeur prendra l'un ou l'autre

let mutableVariable: StringOrNumber = 5;
mutableVariable = '5'; // ça ne fonctionne que parce qu'on a explicitement donné à la variable une union

type PersonList = Array<Person>; // On peut mettre un type dans un autre

const persons: PersonList = [person]; // Ici TS est capable de comprendre que c'est une liste de Person, mais je précise pour la lecture

type Parent = Person & { children: PersonList }; // On peut faire de l'héritage de type

const parentExample: Parent = {
  ...person, // Ici on utilise le spread operator, c'est à dire qu'on injecte toutes les propriétés de la variable dans l'objet qu'on est en train de créer
  children: [],
};

persons.push(parentExample); // Ca fonctionne car Parent est une Person. En revanche, on perd l'accès à children si on ne fait pas de cast

type ImmortalPerson = Omit<Person, 'age' | 'dateOfBirth'>; // On peut créer un type à partir d'un autre en précisant quelles propriétés enlever

const immortalPerson: ImmortalPerson = {
  firstName: 'Jane',
  lastName: 'Doe',
  isSubscribed: false,
};

type Subscriber = Pick<Person, 'isSubscribed' | 'lastName'>; // On peut à l'inverse créer un type en précisant quelles propriétés garder

const someSub: Subscriber = {
  isSubscribed: true,
  lastName: 'Peter',
};

type SearchAlgorithm = 'DFS' | 'BFS' | 'A*'; // Plutôt que d'utiliser string, on peut mettre un set de valeurs

// Un type a connaître absolument, le Record, qui matérialise un objet dynamique
type SomeDynamicObject = Record<string, number>; // Le type de clé, le type de la valeur

const myObject: SomeDynamicObject = {
  someKey: 5,
};

// Un type peut aussi contenir des fonctions
type TWithSomeFunction = {
  doSomething(): void;
};

const myOtherObject: Person & TWithSomeFunction = {
  isSubscribed: false,
  age: 32,
  firstName: 'John',
  lastName: 'Doe',
  dateOfBirth: new Date(),
  doSomething() {
    console.log('Hello World');
  },
};
