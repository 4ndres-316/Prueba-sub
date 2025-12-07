const cards = document.querySelectorAll(".card");

const bootstrapColors = [
  "bg-primary",
  "bg-secondary",
  "bg-success",
  "bg-danger",
  "bg-warning",
  "bg-info",
  "bg-light",
  "bg-dark",
];

let currentIndex = 0;

const botonBuscar = document.querySelector(".btn.btn-warning");

function cambiarColor(elemento) {
  bootstrapColors.forEach((color) => elemento.classList.remove(color));
  const nuevoColor =
    bootstrapColors[Math.floor(Math.random() * bootstrapColors.length)];
  elemento.classList.add(nuevoColor);
}

botonBuscar.addEventListener("click", () => {
  cambiarColor(cards[currentIndex]);
  currentIndex++;
  if (currentIndex >= cards.length) {
    currentIndex = 0;
  }
});

cards.forEach((card) => {
  let zoomInterval;
  let scale = 1;

  card.addEventListener("mouseenter", () => {
    zoomInterval = setInterval(() => {
      scale += 0.01;
      card.style.transform = `scale(${scale})`;
      card.style.transition = "transform 0.05s linear";
    }, 50);
  });

  card.addEventListener("mouseleave", () => {
    clearInterval(zoomInterval);
    scale = 1;
    card.style.transform = "scale(1)";
    card.style.transition = "transform 0.3s ease-out";
  });
});
