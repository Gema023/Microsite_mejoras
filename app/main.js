fetch("data/anuario-1.json")
.then((res) => res.json())
.then((data) => {
    let cajaProyectos = document.querySelector(".caja");

    data.forEach((proyecto) => {
        let cadaProyecto = document.createElement("article");
        cadaProyecto.classList.add("proyecto");
        cadaProyecto.id = proyecto.id;

        let imagenes = proyecto.imagenes ? proyecto.imagenes.split(",") : [];
        let primeraImagen = imagenes.length > 0 ? imagenes[0].trim() : "";

        let tituloHTML = proyecto.titulo ? `<h2>${proyecto.titulo}</h2>` : "";
        let subtituloHTML = proyecto.subtitulo
        ? `<p>${proyecto.subtitulo}</p>`
        : "";
        let nombreEstudianteHTML = proyecto.nombre_estudiante
        ? `<p>${proyecto.nombre_estudiante}</p>`
        : "";

        let imagenHTML = primeraImagen
        ? `<img class="imagenes_proyectos" src="${primeraImagen}" alt="Imagen proyecto">`
        : "";

        cadaProyecto.innerHTML = `
                    <div class="textos_apartados">
                        ${tituloHTML}
                        ${subtituloHTML}
                        ${nombreEstudianteHTML}
                    </div>
                    <div class="imagenes_contenedor">
                        ${imagenHTML}
                    </div>
                `;

        cajaProyectos.appendChild(cadaProyecto);
    });
  })
.then(() => {
    let abrirProyecto = (e) => {
        window.open(`proyectos.html?id=${e.currentTarget.id - 1}`, "_self");
    };
    
    let proyectos = document.querySelectorAll(".proyecto");
    proyectos.forEach((item) => {
        item.addEventListener("click", abrirProyecto, true);
    });    
})

let menuDesplegable = document.querySelector('.desplegable');

let menu = document.querySelector('#menu');

menuDesplegable.addEventListener('click', () => {
    menu.classList.toggle('none');
});
