export class Stack<T> {
  private _stack: T[] = [];

  push(value: T): void {
    this._stack.push(value);
  }

  pop(): T | undefined {
    return this._stack.pop();
  }

  peek(): T | undefined {
    return this._stack[this._stack.length - 1];
  }

  get length(): number {
    return this._stack.length;
  }
}


const pila = new Stack<string>();

for (const char of pila) {
  
}


console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))
console.log(isValid("[]"))
console.log(isValid("(){}}[]"))