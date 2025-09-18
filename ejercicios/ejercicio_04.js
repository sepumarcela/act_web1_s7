//  "activity": "Análisis de Ventas con reduce() - Dado un array de ventas con producto, cantidad, precio, fecha. Usa reduce() para calcular total de ingresos, producto más vendido (por cantidad) y promedio de venta por transacción.",
//         "solution": "ejercicios/ejercicio_04.js"

let ventas = [
  { producto: "Lápiz", cantidad: 10, precio: 500, fecha: "2025-09-01" },
  { producto: "Cuaderno", cantidad: 5, precio: 2000, fecha: "2025-09-02" },
  { producto: "Borrador", cantidad: 8, precio: 300, fecha: "2025-09-03" },
  { producto: "Libro", cantidad: 2, precio: 15000, fecha: "2025-09-04" },
  { producto: "Sacapuntas", cantidad: 4, precio: 1000, fecha: "2025-09-05" }
];

let totalIngresos = ventas.reduce((acum, venta) => acum + (venta.cantidad * venta.precio), 0);

let productoMasVendido = ventas.reduce((masVendido, venta) => {
  return (venta.cantidad > masVendido.cantidad) ? venta : masVendido;
});

let totalVentas = ventas.reduce((acum, venta) => acum + (venta.cantidad * venta.precio), 0);
let promedioVenta = totalVentas / ventas.length;

console.log("Total de ingresos: $" + totalIngresos);
console.log("Producto más vendido: " + productoMasVendido.producto + " (Cantidad: " + productoMasVendido.cantidad + ")");
console.log("Promedio de venta por transacción: $" + promedioVenta.toFixed(2));