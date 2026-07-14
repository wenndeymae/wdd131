function calculateWindChill(t, v) {
  return 13.12 + 0.6215 * t - 11.37 * v ** 0.16 + 0.3965 * t * v ** 0.16;
}

const temp = 5;
const wind = 12;

if (temp <= 10 && wind > 4.8) {
  document.querySelector('#windchill').textContent =
    calculateWindChill(temp, wind).toFixed(1) + "°C";
} else {
  document.querySelector('#windchill').textContent = "N/A";
}

document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#modified').textContent = document.lastModified;