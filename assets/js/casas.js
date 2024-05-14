fetch("../terrasolDIJ/assets/mockData/casas-mock.json")
  .then((response) => response.json())
  .then((json) =>
    json.forEach((house) => {
      createCardCasa(house);
    })
  );

function createCardCasa(data) {
  console.log(data);
  // Crear el elemento principal <div> con la clase "card col-md-4"
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "col-md-3");

  // Crear el contenedor de la fila (row)
  const rowDiv = document.createElement("div");
  rowDiv.classList.add("row");

  // Crear el elemento <div> del carrusel
  const carouselDiv = document.createElement("div");
  carouselDiv.classList.add("col-md-12");
  carouselDiv.innerHTML = `
    <div id="CarouselTest${data.id}" class="carousel slide" data-bs-ride="carousel" data-interval="10000">
        <ol class="carousel-indicators">
            <li data-bs-target="#CarouselTest${data.id}" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#CarouselTest${data.id}" data-bs-slide-to="1"></li>
            <li data-bs-target="#CarouselTest${data.id}" data-bs-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="${data.image1}" class="d-block w-100 img-responsive" alt="" />
            </div>
            <div class="carousel-item">
                <img src="${data.image2}" class="d-block w-100 img-responsive" alt="" />
            </div>
            <div class="carousel-item">
                <img src="${data.image3}" class="d-block w-100 img-responsive" alt="" />
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#CarouselTest${data.id}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#CarouselTest${data.id}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Siguiente</span>
        </button>
    </div>
`;

  // Crear el segundo <div> con la clase "col-md-12" para la descripción de la propiedad
  const descriptionDiv = document.createElement("div");
  descriptionDiv.classList.add("col-md-12", "px-3");
  descriptionDiv.innerHTML = `
    <div class="card-body px-6">
        <h4 class="card-title">${data.city}</h4>
        <p class="card-text">Descripción de la propiedad</p>
        <p class="card-text">test descripcion: ${data.description}</p>
        <p class="card-text">Detalle propiedad</p>
        <p class="card-text">test precio: ${data.price}</p>
        <p class="card-text">test email: ${data.email}</p>
    </div>
`;

  // Agregar los elementos al DOM
  rowDiv.appendChild(carouselDiv);
  rowDiv.appendChild(descriptionDiv);
  cardDiv.appendChild(rowDiv);
  casas = document.getElementById("casas");
  casas.appendChild(cardDiv);
}
