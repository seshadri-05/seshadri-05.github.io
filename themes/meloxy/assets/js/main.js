function newRandomHue() {
  const hue = Math.random() * 360;
  return `oklch(0.664 0.1851 ${hue})`;
}

function setNewRandomHue() {
  const color = newRandomHue();
  document.documentElement.style.setProperty('--source', color);
  localStorage.setItem("color", color);
}

const color = localStorage.getItem("color") ?? newRandomHue();
document.documentElement.style.setProperty('--source', color);

document.addEventListener("DOMContentLoaded", function() {
  const h1 = document.querySelector("h1")
  h1.addEventListener('click', setNewRandomHue)
})
