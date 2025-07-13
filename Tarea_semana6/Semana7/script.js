// Arreglo con productos iniciales
const productos = [
    {
        nombre: "Cuaderno A5",
        precio: 2.50,
        descripcion: "Ideal para notas diarias y apuntes rápidos."
    },
    {
        nombre: "Lápiz Negro HB",
        precio: 0.40,
        descripcion: "Escritura suave y precisa en todo momento."
    },
    {
        nombre: "Marcador Permanente",
        precio: 1.20,
        descripcion: "Resistente al agua, perfecto para superficies variadas."
    }
];

// Función para mostrar los productos en la página
function mostrarProductos() {
    const lista = document.getElementById("lista-productos");
    lista.innerHTML = ""; // Limpia la lista antes de renderizar

    productos.forEach((producto) => {
        const item = document.createElement("li");
        item.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}: ${producto.descripcion}`;
        lista.appendChild(item);
    });
}

// Evento para agregar un nuevo producto
document.getElementById("btn-agregar").addEventListener("click", () => {
    const nuevo = {
        nombre: "libro",
        precio: 5.00,
        descripcion: "Ejercitara la mente."
    };
    productos.push(nuevo);  // Se agrega al final del arreglo
    mostrarProductos();     // Se actualiza la vista
});

// Al cargar la página, se muestran los productos existentes
window.onload = mostrarProductos;