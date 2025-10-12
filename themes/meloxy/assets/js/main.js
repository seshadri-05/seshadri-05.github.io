const hue = Math.random() * 360;
const color = localStorage.getItem("color") ?? `oklch(0.664 0.1851 ${hue})`;
localStorage.setItem("color", color);
document.documentElement.style.setProperty('--source', color);
