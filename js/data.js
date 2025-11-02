document.addEventListener("DOMContentLoaded", () => {
  const mostrar = document.getElementById("data");
  const dato = localStorage.getItem("Guardado");

  mostrar.textContent = dato ? dato : "No hay datos guardados.";
});
