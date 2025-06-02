function calcularFactorial(numero: number): number {
  if (numero === 0) {
    return 1;
  }
  let resultado = 1;
  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }
  return resultado;
}

const miNumero = 5;
const factorialCalculado = calcularFactorial(miNumero);
console.log(`El factorial de ${miNumero} es ${factorialCalculado}`);

interface Producto {
  nombre: string;
  precio: number;
  cantidad: number;
}

function calcularTotalCompra(productos: Producto[]): number {
  let total = 0;
  for (const producto of productos) {
    total += producto.precio * producto.cantidad;
  }
  return total;
}

const listaDeProductos: Producto[] = [
  { nombre: "Laptop", precio: 1200, cantidad: 1 },
  { nombre: "Mouse", precio: 25, cantidad: 2 },
  { nombre: "Teclado", precio: 75, cantidad: 1 },
];

const totalAPagar = calcularTotalCompra(listaDeProductos);
console.log(`El total de la compra es: $${totalAPagar}`);