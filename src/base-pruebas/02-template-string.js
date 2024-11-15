export function getSaludo(nombre) {
  return "Hola " + nombre;
}

const nombre = "Juan";
console.log(`Este es un texto: ${getSaludo(nombre)}  `);
