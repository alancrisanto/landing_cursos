let cards = [
	{
		id: 1,
		img: "assets/curso-de-infraestructuras-criticas_n.jpg",
		title: "Infraestructuras Críticas",
		horas: 150,
		ects: 2,
		duracion: 1,
		link: "#",
	},
	{
		id: 2,
		img: "assets/curso-de-bandas-latinas.jpg",
		title: "Bandas Latinas y Pandillas Juveniles de carácter violento",
		horas: 150,
		ects: 2,
		duracion: 1,
		link: "#",
	},
	{
		id: 3,
		img: "assets/curso-policia-local-como-primera-linea-de-actuacion.jpg",
		title: "Policía Local como Primera Línea de Actuación en la Lucha Contra la Radicalización Islamista",
		horas: 150,
		ects: 2,
		duracion: 1,
		link: "#",
	},
	{
		id: 4,
		img: "assets/analisis-de-inteligencia-criminal_n.jpg",
		title: "Análisis de Inteligencia Criminal",
		horas: 150,
		ects: 2,
		duracion: 1,
		link: "#",
	},
	{
		id: 5,
		img: "assets/fundamentos-de-inteligencia-_n.jpg",
		title: "Fundamentos de Inteligencia",
		horas: 150,
		ects: 2,
		duracion: 1,
		link: "#",
	},
	{
		id: 6,
		img: "assets/curso-de-criminologia-y-criminalistica_n.jpg",
		title: "Criminología y Criminalística",
		horas: 150,
		ects: 2,
		duracion: 1,
		link: "#",
	},
	{
		id: 7,
		img: "assets/victimas-vulnerables-delitos-de-odio_n.jpg",
		title: "Víctimas Vulnerables: Delitos de Odio",
		horas: 150,
		ects: 2,
		duracion: 1,
		link: "#",
	},
];

const cardsContainer = document.querySelector(".cards-container");

// --------- Funciones
const templateCard = function (lst) {
	return lst.map((el) => {
		return `<div class="card rounded rounded-3" style="width: 18rem;">
    <img src="${el.img}" class="card-img-top" alt="...">
    <div class="card-body text-center d-flex flex-column justify-content-between">
      <h5 class="card-title text-white fs-6">${el.title}</h5>
      <div class="content-desc">
        <div class="info d-flex justify-content-between pt-3 pb-2">
          <p class="text-warning fw-medium">${el.horas} Horas</p>
          <p class="text-warning fw-medium">${el.ects} ECTS</p>
          <p class="text-warning fw-medium">${el.duracion} mes</p>
        </div>
        <div class="border-bottom border-warning mb-3"></div>
        <div>
          <a href="#" class="btn btn-warning rounded-pill text-white fw-medium">Solicitar Información</a>
        </div>
      </div>
    </div>
  </div>`;
	});
};

cardsContainer.innerHTML = templateCard(cards).join("");
