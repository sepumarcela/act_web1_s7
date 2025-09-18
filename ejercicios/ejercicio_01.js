// "activity": "Gestión de Inventario Básico - Crea un array de objetos que represente un inventario de productos. 
// Cada producto debe tener: id, nombre, precio, categoria, stock. Declara al menos 5 productos y muestra todos los productos,
//  total de productos en inventario y valor total del inventario.",
// "solution": "ejercicios/ejercicio_01.js"


const inventario = [
  { id: 1, nombre: "Labial Mate", precio: 15000, categoria: "Maquillaje", stock: 30 },
  { id: 2, nombre: "Base de Maquillaje", precio: 35000, categoria: "Maquillaje", stock: 20 },
  { id: 3, nombre: "Esmalte de Uñas", precio: 20000, categoria: "Uñas", stock: 50 },
  { id: 4, nombre: "Crema Facial", precio: 50000, categoria: "Cuidado de la piel", stock: 15 },
  { id: 5, nombre: "Shampoo Hidratante", precio: 45000, categoria: "Cabello", stock: 40 },
  { id: 6, nombre: "Plancha de Cabello", precio: 250000, categoria: "Accesorios", stock: 8 }
];


console.log("Inventario de Tienda de Belleza:");
for (let i = 0; i < inventario.length; i++) {
  let producto = inventario[i];
  console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}, Categoría: ${producto.categoria}, Stock: ${producto.stock}`);
}

let totalProductos = 0;
for (let i = 0; i < inventario.length; i++) {
  totalProductos += inventario[i].stock;
}

let valorTotal = 0;
for (let i = 0; i < inventario.length; i++) {
  valorTotal += inventario[i].precio * inventario[i].stock;
}

console.log("\n Total de artículos en inventario:", totalProductos);
console.log(" Valor total del inventario: $", valorTotal);