document.addEventListener("DOMContentLoaded", () => {

  const tours = [
    "Tokyo City Tour",
    "Kyoto Cultural Tour",
    "Osaka Food Tour"
  ];

  const select = document.getElementById("tour");

  tours.forEach(t => {
    const option = document.createElement("option");
    option.value = t;
    option.textContent = t;
    select.appendChild(option);
  });

});