// Lista de proyectos con imágenes
const proyectos = [
  {
    titulo: "Agenda de Citas Médicas",
    descripcion:
      "Un sistema de agenda sencillo con puro JavaScript para aprender lo básico del lenguaje y experimentar diseños UX/UI",
    url: "https://seven-16.github.io/CitaMedica/index.html",
    imagen: "imagenes/citamedica.png",
  },
  {
    titulo: "Wikipedia DanDaDan",
    descripcion: "Una Wiki de mi anime favorito DanDaDan.",
    url: "https://seven-16.github.io/Dandadan/",
    imagen: "imagenes/DanDaDan.png",
  },
  {
    titulo: "Flores Amarillas",
    descripcion:
      "Una página que hice como regalo sin fines de negocio, creada con amor para una persona especial",
    url: "https://floresamarillas-rust-five.vercel.app/",
    imagen: "imagenes/flores.png",
  },
];
const lista = document.querySelector("#lista-proyectos");
proyectos.forEach((proyecto, indice) => {
  const tarjeta = document.createElement("article");
  tarjeta.className = "card";
  const visual = document.createElement("div");
  visual.className = "visual";
  visual.setAttribute("aria-hidden", "true");
  const mostrarEjemplo = () => {
    visual.innerHTML = '<div class="window"></div>';
  };
  if (proyecto.imagen) {
    const imagen = document.createElement("img");
    imagen.src = proyecto.imagen;
    imagen.alt = "";
    imagen.loading = "lazy";
    imagen.onerror = mostrarEjemplo;
    visual.append(imagen);
  } else {
    mostrarEjemplo();
  }
  const cuerpo = document.createElement("div");
  cuerpo.className = "card-body";
  const numero = document.createElement("span");
  numero.className = "number";
  numero.textContent = String(indice + 1).padStart(2, "0") + " / PROYECTO";
  const titulo = document.createElement("h3");
  titulo.textContent = proyecto.titulo;
  const descripcion = document.createElement("p");
  descripcion.textContent = proyecto.descripcion;
  let accion;
  try {
    const enlace = new URL(proyecto.url);
    if (!["http:", "https:"].includes(enlace.protocol)) throw Error();
    accion = document.createElement("a");
    accion.className = "project-link";
    accion.href = enlace.href;
    accion.target = "_blank";
    accion.rel = "noopener noreferrer";
    accion.textContent = "Ver proyecto ↗";
    accion.setAttribute(
      "aria-label",
      "Ver " + proyecto.titulo + " (abre en una pestaña nueva)",
    );
  } catch {
    accion = document.createElement("span");
    accion.className = "disabled";
    accion.textContent = "Enlace próximamente";
  }
  cuerpo.append(numero, titulo, descripcion, accion);
  tarjeta.append(visual, cuerpo);
  lista.append(tarjeta);
});
