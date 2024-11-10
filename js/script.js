function mostrarSeccion(id) {
    // Ocultar todas las secciones
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach((seccion) => {
        seccion.style.display = 'none';
    });
    
    // Mostrar la sección seleccionada
    const seccionSeleccionada = document.getElementById(id);
    seccionSeleccionada.style.display = 'block';
}

// Mostrar la primera sección por defecto
document.addEventListener("DOMContentLoaded", function() {
    mostrarSeccion('objetivo');
});

