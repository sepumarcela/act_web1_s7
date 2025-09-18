// "activity": "Búsqueda y Verificación - Crea un array de usuarios con id, nombre, email, activo. Implementa búsquedas usando find() para buscar usuario por email, findIndex() para obtener posición de usuario por id, some() para verificar si hay usuarios inactivos y every() para verificar si todos tienen email válido (contiene @).",
// "solution": "ejercicios/ejercicio_05.js"

let usuarios = [
  { id: 1, nombre: "Juliana", email: "juliana@gmail.com", activo: true },
  { id: 2, nombre: "Santiago", email: "santiago@hotmai.com", activo: false },
  { id: 3, nombre: "Matias", email: "matias@gmail.com", activo: true },
  { id: 4, nombre: "Juan", email: "juan@outlook.com", activo: true },
  { id: 5, nombre: "Sofía", email: "sofia@hotmail.com", activo: true } // <-- sin @ para probar
];

let usuarioPorEmail = usuarios.find(u => u.email === "juliana@gmail.com");

let posicionUsuario = usuarios.findIndex(u => u.id === 4);

let hayInactivos = usuarios.some(u => u.activo === false);

let todosEmailsValidos = usuarios.every(u => u.email.includes("@"));

console.log(" Usuario con email 'juliana@gmail.com':");
console.log(usuarioPorEmail);

console.log("\n Posición del usuario con id = 4:");
console.log(posicionUsuario);

console.log("\n ¿Hay usuarios inactivos?:");
console.log(hayInactivos);

console.log("\n ¿Todos los usuarios tienen email válido?:");
console.log(todosEmailsValidos);