let obtainParam = (url) => {
  let urlParam = String(url.match(/\?+.+/));
  urlParam = urlParam.replace("?id=", "");
  return urlParam;
};

let param = obtainParam(document.URL);

let containerProyectos = document.querySelector(".container2");
let gridProyectos = document.querySelector(".grid_proyectos");

fetch("data/anuario-1.json")
  .then((res) => res.json())
  .then((data) => {
    let proyecto = data[Number(param)];
    let imagenes = proyecto.imagenes ? proyecto.imagenes.split(",") : [];
    let imagenUno = imagenes.length > 0 ? imagenes[0].trim() : "";
    let imagenDos = imagenes.length > 0 ? imagenes[1].trim() : "";
    let tituloHTML = proyecto.titulo ? `<h2>${proyecto.titulo}</h2>` : "";
    let subtituloHTML = proyecto.subtitulo ? `<p>${proyecto.subtitulo}</p>` : "";
    let nombreEstudianteHTML = proyecto.nombre_estudiante ? `<p>${proyecto.nombre_estudiante}</p>` : "";
    let a = 0;
    containerProyectos.innerHTML = `
    <div class="portada_proyectos">
        <img src="${imagenUno}" alt="" class="imagen_portada_proyectos">
    </div>
    <div class="texto_proyectos">
    ${tituloHTML}
    ${subtituloHTML}
    ${nombreEstudianteHTML}
    </div>
    <article class="container3_proyectos">
    <p class="texto_proyectos">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo natus mollitia sequi facere deleniti exercitationem nihil sapiente cum, labore veniam animi laboriosam et quasi necessitatibus neque! Iusto accusamus illum neque expedita magni quibusdam sit ipsum, dolorum sapiente perferendis ducimus aliquid. Repudiandae quidem qui, dicta perspiciatis maxime incidunt assumenda molestiae. Itaque enim, odit dolore dicta molestias officiis reprehenderit dignissimos alias est in necessitatibus? Magni veritatis amet eveniet itaque corporis deserunt, voluptatum vel, nam fugiat alias nostrum. Quo sed maxime atque ab nemo quaerat veniam. Veritatis reiciendis pariatur, beatae qui ut incidunt ea adipisci labore maxime eligendi sapiente quibusdam ducimus dicta quas. Saepe alias unde ipsam totam nostrum nisi sed. Voluptatum cumque laborum dolore quidem voluptatibus harum exercitationem, officiis iure corrupti perferendis et tenetur fugit dolor culpa nulla cum? Voluptas ad excepturi odio in, deserunt aut ipsa. Enim hic culpa autem minima sequi atque harum minus voluptatibus neque, sint alias dicta vel.
    </p>
        <div class="container_imagen_proyectos">
            <img class="imagen_proyectos" src="${imagenDos}" alt="">
        </div>
    </article>
    `;
    for (a = 0; a < imagenes.length; a++) {
      let imagen = imagenes.length > 0 ? imagenes[a].trim() : "";
      gridProyectos.innerHTML += `
        <div class="container_imagenes_proyectos">
            <img src="${imagen}" alt="">
        </div>`;
    }
  });

let menuDesplegable = document.querySelector(".desplegable");

let menu = document.querySelector("#menu");

menuDesplegable.addEventListener("click", () => {
  menu.classList.toggle("none");
});
