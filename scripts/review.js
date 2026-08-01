document.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);

  const product = params.get("product");
  const rating = params.get("rating");
  const installDate = params.get("installDate");
  const features = params.getAll("features"); // multiple checkboxes
  const review = params.get("review");
  const username = params.get("username");

  const output = document.getElementById("review-output");

  output.innerHTML = `
    <h2>Thank you for your review!</h2>
    <p><strong>Product:</strong> ${product}</p>
    <p><strong>Rating:</strong> ${rating} ⭐</p>
    <p><strong>Installation Date:</strong> ${installDate}</p>
    <p><strong>Features:</strong> ${features.join(", ") || "None selected"}</p>
    <p><strong>Review:</strong> ${review || "No comments"}</p>
    <p><strong>Name:</strong> ${username || "Anonymous"}</p>
  `;

  // REVIEW COUNTER (localStorage)
  let count = localStorage.getItem("reviewCount");

  if (!count) {
    count = 0;
  }

  count++;
  localStorage.setItem("reviewCount", count);

  document.getElementById("review-count").textContent =
    `Total Reviews Submitted: ${count}`;

});