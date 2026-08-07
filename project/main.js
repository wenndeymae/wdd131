document.addEventListener("DOMContentLoaded", () => {

  const tours = [
    { name: "Tokyo City Tour", price: "$1200", days: 5 },
    { name: "Kyoto Cultural Tour", price: "$1000", days: 4 },
    { name: "Osaka Food Tour", price: "$900", days: 3 }
  ];

  const container = document.getElementById("tour-list");

  if (container) {

    tours.forEach(tour => {

      const card = document.createElement("div");

      card.innerHTML = `
        <h3>${tour.name}</h3>
        <p>Price: ${tour.price}</p>
        <p>Duration: ${tour.days} days</p>
      `;

      container.appendChild(card);
    });

  }

});