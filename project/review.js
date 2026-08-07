document.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);

  const tour = params.get("tour");
  const rating = params.get("rating");
  const date = params.get("date");
  const review = params.get("review");
  const name = params.get("name");

  const output = document.getElementById("output");

  output.innerHTML = `
    <h2>Review Summary</h2>
    <p><strong>Tour:</strong> ${tour}</p>
    <p><strong>Rating:</strong> ${rating} ⭐</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Review:</strong> ${review || "None"}</p>
    <p><strong>Name:</strong> ${name || "Anonymous"}</p>
  `;

  let count = localStorage.getItem("tourReviews") || 0;

  count++;
  localStorage.setItem("tourReviews", count);

  document.getElementById("count").textContent =
    `Total Reviews: ${count}`;

});