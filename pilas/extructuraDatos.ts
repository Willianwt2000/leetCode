// export class Stack<T> {
//   private _stack: T[] = [];

//   push(value: T): void {
//     this._stack.push(value);
//   }

//   pop(): T | undefined {
//     return this._stack.pop();
//   }

//   peek(): T | undefined {
//     return this._stack[this._stack.length - 1];
//   }

//   get length(): number {
//     return this._stack.length;
//   }
// }


//Step 1: Crear el espacio  en memoria para almacenar un nodo

//step 2: Cargar el valor dentro del nodo(dato)
//step 3: Cargar el puntero pila dentro del nodo(siguiente)
//step 4: asignar un nuevo nodo a pila

// Definimos la estructura de un nodo
class Nodo {
  dato: any; // El valor que almacena el nodo
  siguiente: Nodo | null; // Puntero al siguiente nodo en la pila

  constructor(dato: any) {
      this.dato = dato; // Paso 2: Cargar el valor dentro del nodo (dato)
      this.siguiente = null; // Paso 3: Inicializar el puntero al siguiente nodo como null
  }
}

// Definimos la estructura de la pila
class Pila {
  tope: Nodo | null; // Puntero al nodo en la cima de la pila

  constructor() {
      this.tope = null; // Inicializamos la pila vacía
  }

  // Método para agregar un elemento a la pila (push)
  push(dato: any): void {
      const nuevoNodo = new Nodo(dato); // Paso 1: Crear el espacio en memoria para almacenar un nodo
      nuevoNodo.siguiente = this.tope; // Paso 3: Cargar el puntero pila dentro del nodo (siguiente)
      this.tope = nuevoNodo; // Paso 4: Asignar el nuevo nodo como el tope de la pila
  }

  // Método para eliminar y devolver el elemento en la cima de la pila (pop)
  pop(): any {
      if (this.tope === null) {
          throw new Error("La pila está vacía");
      }
      const dato = this.tope.dato; // Guardamos el valor del nodo en la cima
      this.tope = this.tope.siguiente; // Movemos el tope al siguiente nodo
      return dato; // Devolvemos el valor del nodo eliminado
  }

  // Método para ver el elemento en la cima de la pila sin eliminarlo (peek)
  peek(): any {
      if (this.tope === null) {
          throw new Error("La pila está vacía");
      }
      return this.tope.dato; // Devolvemos el valor del nodo en la cima
  }

  // Método para verificar si la pila está vacía
  estaVacia(): boolean {
      return this.tope === null;
  }
}

// // Ejemplo de uso
// const pila = new Pila();
// pila.push(10); // Agregamos 10 a la pila
// pila.push(20); // Agregamos 20 a la pila
// pila.push(30); // Agregamos 30 a la pila

// console.log(pila.peek()); // Debería imprimir 30
// console.log(pila.pop());  // Debería imprimir 30b



//hello