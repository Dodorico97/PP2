document.addEventListener('DOMContentLoaded', function() {
    const catalogo = document.getElementById('catalogo');

    // Ejemplo de flores
    const flores = [
        { nombre: 'Rosa', precio: '$5', imagen: 'rosa.jpg' },
        { nombre: 'Margarita', precio: '$3', imagen: 'margarita.jpg' },
        { nombre: 'Orquídea', precio: '$10', imagen: 'orquidea.jpg' }
    ];

    flores.forEach(flor => {
        const florDiv = document.createElement('div');
        florDiv.innerHTML = `
            <h2>${flor.nombre}</h2>
            <img src="${flor.imagen}" alt="Imagen de ${flor.nombre}">
            <p>Precio: ${flor.precio}</p>
        `;
        catalogo.appendChild(florDiv);
    });
});
