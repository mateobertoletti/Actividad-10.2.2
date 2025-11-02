document.addEventListener("DOMContentLoaded", () => {
  const Guardado = document.getElementById("inputText");
  const btn = document.getElementById("buttonText");

  btn.addEventListener("click", function() {
    localStorage.setItem("Guardado", Guardado.value);
  });
});
