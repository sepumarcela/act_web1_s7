// "activity": "Transformación de Datos con map() - Crea un array de estudiantes con nombre, edad, notas (array de números). Usa map() para crear un nuevo array con solo los nombres, crear un array con el promedio de cada estudiante y agregar una propiedad estado ('Aprobado' si promedio >= 70, 'Reprobado' si < 70).",
//         "solution": "ejercicios/ejercicio_03.js"

let estudiantes = [
  { nombre: "Juliana", edad: 20, notas: [80, 75, 90] },
  { nombre: "Santiago", edad: 22, notas: [60, 55, 70] },
  { nombre: "Matias", edad: 19, notas: [95, 85, 100] },
  { nombre: "Juan", edad: 21, notas: [40, 50, 45] },
  { nombre: "Sofía", edad: 23, notas: [70, 72, 68] }
];

let nombres = estudiantes.map(est => est.nombre);

let promedios = estudiantes.map(est => {
  let suma = est.notas.reduce((acum, nota) => acum + nota, 0);
  return suma / est.notas.length;
});

let estudiantesConEstado = estudiantes.map(est => {
  let suma = est.notas.reduce((acum, nota) => acum + nota, 0);
  let promedio = suma / est.notas.length;
  return {
    ...est, 
    promedio: promedio,
    estado: promedio >= 70 ? "Aprobado" : "Reprobado"
  };
});

console.log(" Nombres de estudiantes:");
console.log(nombres);

console.log("\n Promedios:");
console.log(promedios);

console.log("\n Estudiantes con estado:");
console.log(estudiantesConEstado);