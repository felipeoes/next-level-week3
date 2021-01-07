// create map
const map = L.map("mapid").setView([-23.6044778, -46.7889801], 15);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "./images/map-marker.svg",
  iconSize: [56, , 68],
  iconAnchor: [29, 68],
});

let marker;

//create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  //remove icon
  marker && map.removeLayer(marker);

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//add photo field
function addPhotoField() {
  //pegar o container de fotos #images
  const container = document.querySelector("#images");
  //pegar o container para duplicar . new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");
  //realizar o clone da última imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  //verificar se o campo está vazio, se sim, nao adicionar ao container de images
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  //limpar o campo antes de adicionar ao container de iamges
  input.value = "";

  //adicionar o clone ao container de #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length < 2) {
    //limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  //deletar o campo
  span.parentNode.remove();
}

// select yes or no
function toggleSelect(event) {
  //retirar a class .active(dos botoes)
  document.querySelectorAll(".button-select button").forEach(function (button) {
    button.classList.remove("active");
  });

  //colocar a class .active nesse botao clicado
  const button = event.currentTarget;
  button.classList.add("active");

  // pegar o botao clicado

  //verificar se sim ou nao

  //atualizar o input hidden com o valor atualizado
  const input = document.querySelectorAll('[name="open_on_weekends"]');

  input.value = button.dataset.value;
}

function validate(event) {
  //validar se lat e lng estao preenchidos
  const needsLatAndLng = false;
  // const lat = event.latlng.lat;
  // const lng = event.latlng.lng;

  const input = document.querySelectorAll("[name=lat]");
  // document.querySelector('[name=lat]').value = lat;
  // document.querySelector('[name=lng]').value = lng;

  if (input.value == "") {
    needsLatAndLng = true;
    console.log("cheguei aq");
  }
  console.log(input);

  if (needsLatAndLng) {
    event.preventDefault();
    alert("Selecione um ponto no mapa");
  }
}