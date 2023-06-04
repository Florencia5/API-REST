const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const user = new FormData(form);
  console.log(user.get("fullName"));
}

const openModal = document.getElementById("open-modal");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");

closeModal.addEventListener("click", () => {
  modal.close();
});

openModal.addEventListener("click", () => {
  modal.showModal();
});

const BASE_URL = "https://647bdcaec0bae2880ad048d1.mockapi.io/users";

// Obtener todos los recursos
function getAll(endpoint) {
  fetch(BASE_URL + endpoint)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

// Obtener un recurso por su ID
function getOne(endpoint, id) {
  fetch(BASE_URL + endpoint + `/${id}`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

// Eliminar un recurso por su ID
function deleteOne(endpoint, id) {
  fetch(BASE_URL + endpoint + `/${id}`, {
    method: "DELETE",
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

// Agregar un nuevo recurso
function addOne(endpoint, user) {
  fetch(BASE_URL + endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

// Editar un recurso existente
function updateOne(endpoint, id, user) {
  fetch(BASE_URL + endpoint + `/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

// Ejemplos de uso

// Obtener todos los recursos
getAll(":endpoint");

// Obtener un recurso por su ID
getOne(":endpoint", 1);

// Eliminar un recurso por su ID
deleteOne(":endpoint", 1);

// Agregar un nuevo recurso
const newUser = {
  name: "Jorge Aníbal Sardón",
  email: "giorgioDJ@dero.com",
  phone: "(223) 232323223",
};
addOne(":endpoint", newUser);

// Editar un recurso existente
const updatedUser = {
  name: "Jorge 'el profe' Sardón",
  email: "giorgioDJ@dero.com",
  phone: "(2314) 232323223",
};
updateOne(":endpoint", 1, updatedUser);
