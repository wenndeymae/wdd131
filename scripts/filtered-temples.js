document.addEventListener("DOMContentLoaded", () => {

  // TEMPLE ARRAY
  const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-daylight-1416668-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Rome Italy",
      location: "Rome, Italy",
      dedicated: "2019, March, 10",
      area: 41010,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/1-Rome-Temple-2160936.jpg"
    },
    {
      templeName: "Manila Philippines",
      location: "Manila, Philippines",
      dedicated: "1984, September, 25",
      area: 26683,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/400x250/manila-philippines-temple-lds-993617-wallpaper.jpg"
    }
  ];

  // DISPLAY FUNCTION
  const displayTemples = (templesList) => {
    const container = document.querySelector("#cards");
    container.innerHTML = "";

    templesList.forEach(temple => {
      const card = document.createElement("section");
      card.classList.add("card");

      card.innerHTML = `
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      `;

      container.appendChild(card);
    });
  };

  // FILTERS
  const oldTemples = temples.filter(t => parseInt(t.dedicated) < 1900);
  const newTemples = temples.filter(t => parseInt(t.dedicated) > 2000);
  const largeTemples = temples.filter(t => t.area > 90000);
  const smallTemples = temples.filter(t => t.area < 10000);

  // EVENTS
  document.querySelector("#home").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(largeTemples);
});

document.querySelector("#small").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(smallTemples);
});

  // FOOTER
  document.querySelector("#year").textContent = new Date().getFullYear();
  document.querySelector("#lastModified").textContent = document.lastModified;

  // INITIAL LOAD
  displayTemples(temples);

});