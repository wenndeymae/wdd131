document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("tour-list");

  if (!container) return;

  const tours = [
    { name: "Tokyo Explorer", location: "Tokyo", price: "$1200" },
    { name: "Kyoto Cultural Tour", location: "Kyoto", price: "$1000" },
    { name: "Osaka Food Adventure", location: "Osaka", price: "$900" }
  ];

  // EMPTY STATE CHECK
  if (tours.length === 0) {
    container.innerHTML = "<p>No tours available.</p>";
    return;
  }

  // DISPLAY TOURS
  tours.forEach(tour => {
    const card = document.createElement("div");

    card.innerHTML = `
      <h3>${tour.name}</h3>
      <p><strong>Location:</strong> ${tour.location}</p>
      <p><strong>Price:</strong> ${tour.price}</p>
    `;

    container.appendChild(card);
  });
});