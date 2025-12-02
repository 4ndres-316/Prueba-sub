const header = document.querySelector("header");
const main = document.querySelector("main");

const bootstrapColors = "bg-primary";

function cambiarColor(elemento) {
  bootstrapColors.forEach((color) => elemento.classList.remove(color));
  const nuevoColor =
    bootstrapColors[Math.floor(Math.random() * bootstrapColors.length)];
  elemento.classList.add(nuevoColor);
}

document
  .getElementById("#header")
  .addEventListener("click", () => cambiarColor(header));
document
  .getElementById("#main")
  .addEventListener("click", () => cambiarColor(main));
