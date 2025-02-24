// carrusel.js
document.addEventListener("DOMContentLoaded", function () {
    const carruseles = document.querySelectorAll(".carrusel");

    carruseles.forEach((carrusel) => {
        const imagenes = carrusel.querySelector(".carrusel-imagenes");
        const anterior = carrusel.querySelector(".carrusel-anterior");
        const siguiente = carrusel.querySelector(".carrusel-siguiente");
        let indice = 0;

        function mostrarImagen(indice) {
            const desplazamiento = -indice * 100;
            imagenes.style.transform = `translateX(${desplazamiento}%)`;
        }

        anterior.addEventListener("click", () => {
            indice = (indice === 0) ? imagenes.children.length - 1 : indice - 1;
            mostrarImagen(indice);
        });

        siguiente.addEventListener("click", () => {
            indice = (indice === imagenes.children.length - 1) ? 0 : indice + 1;
            mostrarImagen(indice);
        });
    });
});