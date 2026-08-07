document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");

  if (!output) return;

  const data = JSON.parse(localStorage.getItem("tourReview"));

  if (!data) {
    output.innerHTML = "<p>No review submitted yet.</p>";
    return;
  }

  // CONDITIONAL MESSAGE
  let ratingMessage = "";

  if (data.rating >= 4) {
    ratingMessage = "Excellent!";
  } else if (data.rating == 3) {
    ratingMessage = "Good";
  } else {
    ratingMessage = "Needs Improvement";
  }

  const reviewText = data.review
    ? data.review
    : "No comment provided";

  output.innerHTML = `
    <h2>Review Summary</h2>
    <p><strong>Tour:</strong> ${data.tour}</p>
    <p><strong>Rating:</strong> ${data.rating} ⭐ (${ratingMessage})</p>
    <p><strong>Date:</strong> ${data.date}</p>
    <p><strong>Review:</strong> ${reviewText}</p>
    <p><strong>Name:</strong> ${data.name || "Anonymous"}</p>
  `;
});