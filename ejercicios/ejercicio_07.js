// "activity": "Ordenamiento y Reversión - Crea arrays de números desordenados (ordena ascendente y descendente), nombres de personas (ordena alfabéticamente), objetos con propiedad edad (ordena por edad) y usa reverse() para invertir el orden.",
// "solution": "ejercicios/ejercicio_07.js"

let numeros = [45, 12, 78, 4, 33, 90];
console.log("Array original de números:", numeros);

let ascendente = [...numeros].sort((a, b) => a - b);
console.log("Orden ascendente:", ascendente);

let descendente = [...numeros].sort((a, b) => b - a);
console.log("Orden descendente:", descendente);

let nombres = ["Pedro", "Ana", "Luis", "María", "Sofía"];
console.log("\nArray original de nombres:", nombres);

let nombresAZ = [...nombres].sort();
console.log("Orden alfabético A-Z:", nombresAZ);

let nombresZA = [...nombres].sort().reverse();
console.log("Orden alfabético Z-A:", nombresZA);

let personas = [
  { nombre: "juliana", edad: 25 },
  { nombre: "santiago", edad: 30 },
  { nombre: "matias", edad: 20 },
  { nombre: "juan", edad: 28 }
];
console.log("\nArray original de personas:", personas);

let edadAsc = [...personas].sort((a, b) => a.edad - b.edad);
console.log("Orden por edad ascendente:", edadAsc);

let edadDesc = [...personas].sort((a, b) => b.edad - a.edad);
console.log("Orden por edad descendente:", edadDesc);

let invertido = [...numeros].reverse();
console.log("\nArray de números invertido con reverse():", invertido);