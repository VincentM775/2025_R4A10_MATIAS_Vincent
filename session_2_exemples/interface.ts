interface SomeInterface {
  someMethod(): void; //type utilisé quand on ne renvoie rien
}

// utilisation d'un générique
interface AnotherInterface<T> {
  anotherMethod(): T;
}

interface SomeOtherInterface extends SomeInterface {
  someOtherMethod(): number;
}

class SomeClass implements SomeOtherInterface, AnotherInterface<number> {
  someMethod(): void {
    return;
  }

  anotherMethod(): number {
    return 42;
  }

  someOtherMethod(): number {
    return 3;
  }
}
