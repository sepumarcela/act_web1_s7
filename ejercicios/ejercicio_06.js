// "activity": "Manipulación de Arrays - Crea un array inicial [1, 2, 3, 4, 5] y demuestra push() y pop() (agregar y quitar del final), shift() y unshift() (agregar y quitar del inicio), splice() (insertar elementos en posición específica) y slice() (extraer porción sin modificar original).",
//  "solution": "ejercicios/ejercicio_06.js"

let numeros = [1, 2, 3, 4, 5];
console.log("Array inicial:", numeros);

numeros.push(6);
console.log("Después de push(6):", numeros);

let ultimo = numeros.pop();
console.log("Después de pop():", numeros, " | Elemento eliminado:", ultimo);

numeros.unshift(0);
console.log("Después de unshift(0):", numeros);

let primero = numeros.shift();
console.log("Después de shift():", numeros, " | Elemento eliminado:", primero);

numeros.splice(2, 0, 99, 100); 
console.log("Después de splice(2, 0, 99, 100):", numeros);

let subArray = numeros.slice(1, 4); 
console.log("Resultado de slice(1, 4):", subArray);
console.log("Array original después de slice:", numeros);