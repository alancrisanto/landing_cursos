// variables de lazy loading

const NebrijaContainer = document.querySelector(".cards-nebrija");
const inisegContainer = document.querySelector(".cards-iniseg");

let cardsNebrija = [
	{
		id: 1,
		img: "assets/seguridad-iniseg/curso-superior-de-director-de-seguridad_n.jpg",
		title: "Curso Superior de Director de Seguridad",
		inicio: "Inscripción Abierta",
		ects: 15,
		duracion: "6 meses",
		link: "#formulario-becas",
		institucion: "Nebrija",
		logo: "assets/logos/nebrija_1.jpg",
	},
	{
		id: 2,
		img: "assets/seguridad-iniseg/diploma-superior-universitario-de-detective-privado_n.jpg",
		title: "Diploma Superior Universitario de Detective Privado",
		inicio: "Octubre",
		ects: 180,
		duracion: "3 años",
		link: "#formulario-becas",
		institucion: "Nebrija",
		logo: "assets/logos/nebrija_1.jpg",
	},
];

let cardsIniseg = [
	{
		id: 1,
		img: "assets/seguridad-iniseg/curso-de-gestion-de-la-seguridad-aeroportuaria_n.jpg",
		title: "Curso de Gestión de la Seguridad Aeroportuaria",
		inicio: "Inscripción Abierta",
		ects: 6,
		duracion: "3 meses",
		link: "#formulario-becas",
		institucion: "Iniseg",
		logo: "assets/logos/recurso_6.png",
	},
	{
		id: 2,
		img: "assets/seguridad-iniseg/curso-de-gestion-de-la-seguridad-en-infraestructuras-hoteleras_n.jpg",
		title: "Curso de Gestión de la Seguridad en Infraestructuras Hoteleras",
		inicio: "Inscripción Abierta",
		ects: 6,
		duracion: "3 meses",
		link: "#formulario-becas",
		institucion: "Iniseg",
		logo: "assets/logos/recurso_6.png",
	},
	{
		id: 3,
		img: "assets/seguridad-iniseg/curso-de-gestion-de-la-seguridad-en-puertos_n.jpg",
		title: "Curso de Gestión de la Seguridad en Puertos",
		inicio: "Inscripción Abierta",
		ects: 6,
		duracion: "3 meses",
		link: "#formulario-becas",
		institucion: "Iniseg",
		logo: "assets/logos/recurso_6.png",
	},
	{
		id: 4,
		img: "assets/seguridad-iniseg/curso-superior-en-cooperacion-policialjudicial-internacional_n.jpg",
		title: "Curso Superior en Cooperación Policial/Judicial Internacional",
		inicio: "Inscripción Abierta",
		ects: 12,
		duracion: "3 meses",
		link: "#formulario-becas",
		institucion: "Iniseg",
		logo: "assets/logos/recurso_6.png",
	},
	{
		id: 5,
		img: "assets/seguridad-iniseg/curso-superior-en-delincuencia-organizada_n.jpg",
		title: "Curso Superior en Delincuencia Organizada",
		inicio: "Inscripción Abierta",
		ects: 9,
		duracion: "3 meses",
		link: "#formulario-becas",
		institucion: "Iniseg",
		logo: "assets/logos/recurso_6.png",
	},
	{
		id: 6,
		img: "assets/seguridad-iniseg/curso-superior-en-investigacion-criminal_n.jpg",
		title: "Curso Superior en Investigación Criminal",
		inicio: "Inscripción Abierta",
		ects: 9,
		duracion: "3 meses",
		link: "#formulario-becas",
		institucion: "Iniseg",
		logo: "assets/logos/recurso_6.png",
	},
	{
		id: 7,
		img: "assets/seguridad-iniseg/diplomado-en-reconstruccion-de-investigacion-de-accidentes-de-trafico_n.jpg",
		title: "Curso de Investigación de Accidentes de Tráfico",
		inicio: "Inscripción Abierta",
		ects: 6,
		duracion: "2 meses",
		link: "#formulario-becas",
		institucion: "Iniseg",
		logo: "assets/logos/recurso_6.png",
	},
	{
		id: 8,
		img: "assets/seguridad-iniseg/perito-judicial-en-seguridad-privada_n.jpg",
		title: "Perito Judicial en Seguridad Privada",
		inicio: "Inscripción Abierta",
		ects: 30,
		duracion: "6 meses",
		link: "#formulario-becas",
		institucion: "Iniseg",
		logo: "assets/logos/recurso_6.png",
	},
];

// --------------------------------------------------------------------------------------------------------------------------------

// --------- Funciones
const templateCard = function (lst) {
	return lst.map((el) => {
		return `<div class="card rounded rounded-3" style="width: 20rem;">
							<img class="img-lazy pulse card-img-top" data-src="${el.img}" src="assets/placeholder.webp" alt="imagen curso de ${el.title}">
							<div class="card-body text-center d-flex flex-column justify-content-between">
								<h4 class="card-title text-white fs-6">${el.title}</h4>
								<div class="content-desc">
									<div class="info d-flex justify-content-between pt-3 pb-2">
										<p class="text-warning fw-medium">${el.inicio}</p>
										<p class="text-warning fw-medium">${el.ects} ECTS</p>
										<p class="text-warning fw-medium">${el.duracion}</p>
									</div>
									<div class="border-bottom border-warning mb-3"></div>
									<div>
										<a href="${el.link}" class="btn btn-warning rounded-pill text-white fw-medium btn-info" data-curso="${el.title}">Solicitar Información</a>
									</div>
								</div>
							</div>
						</div>`;
	});
};

NebrijaContainer.innerHTML = templateCard(cardsNebrija).join("");
inisegContainer.innerHTML = templateCard(cardsIniseg).join("");

// ----------------------------------------------------------------------------------------------------------------------------------

// Mantener esta variable despues del templateCard para poder cargar las imágenes
const images = document.querySelectorAll(".img-lazy");
// LAZY LOADING
let imageoptions = {};

let observer = new IntersectionObserver((entries, observer) => {
	console.log("entries", entries);
	entries.forEach((entry) => {
		if (!entry.isIntersecting) return;
		const image = entry.target;
		const newSrc = image.getAttribute("data-src");

		// Escuchamos el evento 'load' para asegurarnos de que la imagen se haya cargado por completo
		image.onload = () => {
			// Eliminamos la clase "pulse" una vez que la imagen se haya cargado
			image.classList.remove("pulse");
			observer.unobserve(image);
		};

		image.src = newSrc;
	});
}, imageoptions);

images.forEach((image) => {
	observer.observe(image);
});

// ----------------------------------------------------------------------------------------------------------------------------------

// Seleecionar curso al hacer click en tarjeta de cursos

document.addEventListener("DOMContentLoaded", function () {
	// Obtener referencia a los elementos del DOM
	const enlacesCurso = document.querySelectorAll(".btn-info");
	const selectCurso = document.querySelector("#selectCurso");

	// Función para manejar el clic en los enlaces de los cursos
	function handleCursoClick(event) {
		event.preventDefault(); // Evitar que el enlace redireccione inmediatamente

		// Obtener el nombre del curso del atributo data-curso del enlace
		const nombreCurso = this.getAttribute("data-curso");

		// Buscar la opción correspondiente al nombre del curso y seleccionarla
		for (let i = 0; i < selectCurso.options.length; i++) {
			if (selectCurso.options[i].text === nombreCurso) {
				selectCurso.selectedIndex = i;
				break;
			}
		}

		// Redirigir al usuario al formulario
		window.location.href = "#formulario-becas";
	}

	// Escuchar evento de clic en cada enlace de curso
	enlacesCurso.forEach(function (enlace) {
		enlace.addEventListener("click", handleCursoClick);
	});
});
