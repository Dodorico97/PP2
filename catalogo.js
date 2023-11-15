document.addEventListener('DOMContentLoaded', (event) => {
    const sectionProductos = document.querySelector('.productos');
    if (!sectionProductos) return;

    const productos = [
        {img: "Rosas.jpg", desc: "ROSAS", price: "$10"},
        {img: "girasoles.jpg", desc: "GIRASOLES", price: "$10"},
        {img: "lirios.jpg", desc: "LIRIOS", price: "$10"},
        {img: "orquideas.jpeg", desc: "ORQUIDEAS", price: "$10"},
        {img: "tulipanes.jpg", desc: "TULIPANES", price: "$10"},
        {img: "cactus.jpg", desc: "CACTUS", price: "$10"},
        {img: "corona.jpeg", desc: "CORONAS", price: "$10"},
        {img: "palma.jpg", desc: "PALMAS", price: "$10"},
        {img: "chocolates.png", desc: "CHOCOLATES", price: "$10"},
    ];

    productos.forEach(product => {
        const article = document.createElement('article');
        article.className = "producto";
    
        const divImagen = document.createElement('div');
        divImagen.className = "producto-imagen-contenedor";
    
        const img = document.createElement('img');
        img.src = "imagenes/" + product.img;
        img.onclick = function() { añadirAlCarrito(product); };
        divImagen.appendChild(img);
    
        const h2 = document.createElement('h2');
        h2.textContent = product.price;
        divImagen.appendChild(h2);
    
        const h1 = document.createElement('h1');
        h1.textContent = product.desc;
    
        article.appendChild(divImagen);
        article.appendChild(h1);
    
        sectionProductos.appendChild(article);
    });
});

function añadirAlCarrito(productoSeleccionado) {
    const producto = {
        id: Date.now() + Math.random().toString(16).substr(2, 8),
        nombre: productoSeleccionado.desc,
        precio: parseInt(productoSeleccionado.price.replace('$', '').replace('.', '')),
        cantidad: 1
    };

    carrito.push(producto);
    guardarCarritoEnLocalStorage();

    actualizarBadge();
}

function actualizarBadge() {
    const badge = document.getElementById("carrito-badge");
    const totalProductos = carrito.reduce((total, producto) => total + producto.cantidad, 0);

    badge.textContent = totalProductos;

    if (totalProductos > 0) {
        badge.style.display = "block";
    } else {
        badge.style.display = "none";
    }
}
