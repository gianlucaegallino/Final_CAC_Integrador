const API_SERVER = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTJjYTAwZDYxZWIzOTEyYjZlNzc4MDA4YWQ3ZmNjOCIsInN1YiI6IjYyODJmNmYwMTQ5NTY1MDA2NmI1NjlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MJSPDJhhpbHHJyNYBtH_uCZh4o0e3xGhZpcBIDy-Y8",
  },
};

const createElement = (tag, className, attributes = {}) => {
  const element = document.createElement(tag);

  if (className) {
    element.classList.add(className);
  }

  Object.entries(attributes).forEach(([key, value]) =>
    element.setAttribute(key, value)
  );

  return element;
};

const fetchMoviesGrid = async (page = 1) => {
  const response = await fetch(
    `${API_SERVER}/movie/popular?page=${page}`,
    options
  );

  const data = await response.json();

  const movies = data.results;

  const tendenciasContainer = document.querySelector(
    ".peliculasTendencia .peliculas"
  );

  tendenciasContainer.innerHTML = "";

  movies.forEach((movie) => {
    const pelicula = createElement("div", "pelicula");
    const anchor = createElement("a", "");
    anchor.href = "./pages/detalle.html";
    const img = createElement("img", "imgTendencia", {
      src: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      alt: movie.title,
      loading: "lazy",
    });
    const tituloPelicula = createElement("div", "tituloPelicula");
    const titulo = createElement("h4", "");
    titulo.textContent = movie.title;

    tituloPelicula.appendChild(titulo);
    pelicula.append(img, tituloPelicula);
    anchor.appendChild(pelicula);
    const peliculaWrapper = createElement("div", "peliculas");
    peliculaWrapper.appendChild(anchor);
    tendenciasContainer.appendChild(peliculaWrapper);
  });

  tendenciasContainer.parentElement.setAttribute("data-page", page);
};

const fetchMoviesFlex = async () => {
  const response = await fetch(`${API_SERVER}/movie/top_rated`, options);

  const data = await response.json();

  const movies = data.results;

  const aclamadasContainer = document.querySelector(".aclamadas");

  movies.forEach((movie) => {
    const peliculaItem = createElement("div", "peliculaItem");
    const img = createElement("img", "imgAclamada", {
      src: ``,
      alt: movie.title,
      loading: "lazy",
    });

    peliculaItem.appendChild(img);
    aclamadasContainer.appendChild(peliculaItem);
  });
};

document.querySelector(".anterior").addEventListener("click", () => {
  let currentPage = Number(
    document.querySelector(".peliculasTendencia").getAttribute("data-page")
  );

  if (currentPage <= 1) return;

  fetchMoviesGrid(currentPage - 1);
});

document.querySelector(".siguiente").addEventListener("click", () => {
  let currentPage = Number(
    document.querySelector(".peliculasTendencia").getAttribute("data-page")
  );

  fetchMoviesGrid(currentPage + 1);
});

document.addEventListener("DOMContentLoaded", () => {
  fetchMoviesGrid();

  fetchMoviesFlex();
});
