document.addEventListener("DOMContentLoaded", async () => {
  formNuevaPelicula = document.getElementById("formNuevaPelicula");

  formNuevaPelicula.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(formNuevaPelicula);

    const titulo = formData.get("titulo");
    const genero = formData.get("genero");
    const duracion = formData.get("duracion");
    const imagen = formData.get("imagen");

    if (titulo === "" || genero === "" || duracion === "" || imagen === "") {
      alert("Todos los campos son obligatorios");
      return;
    }

    const imageName = imagen.name;

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        titulo: titulo,
        genero: genero,
        duracion: duracion,
        imagen: imageName,
      }),
    };

    const response = await fetch(
      "http://localhost:8080/app/peliculas",
      options
    );

    const data = await response.json();

    if (response.status === 201) {
      alert("Pelicula agregada correctamente");
      formNuevaPelicula.reset();

      location.reload();
    } else {
      alert("Error al agregar la pelicula");
    }
  });
});
