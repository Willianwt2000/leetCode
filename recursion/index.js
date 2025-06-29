function factorial(n) {
  // Caso base: Si n es 0 o 1, el factorial es 1.
  if (n === 0 || n === 1) {
    return 1;
  }
  // Paso recursivo: n * factorial de (n-1)
  else {
    return n * factorial(n - 1);
  }
}

// Ejemplos de uso:
console.log(factorial(5));  // Output: 120 (5 * 4 * 3 * 2 * 1)
console.log(factorial(0));  // Output: 1
console.log(factorial(3));  // Output: 6 (3 * 2 * 1)