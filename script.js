document.addEventListener("DOMContentLoaded", Start);

function Start() {
  ResetDate();
  RenderCategories();
}

function ResetDate() {
  // Get stored date or default to today's date
  const dateInput = document.getElementById("date");
  const storedDate = localStorage.getItem("selectedDate");
  const today = new Date().toISOString().split("T")[0];

  dateInput.value = storedDate || today;
}

function RenderCategories() {
  const categories = JSON.parse(localStorage.getItem("categories")) || [];

  const categoryContainer = document.querySelector(".category-container");

  if (categories.length > 0) {
    categoryContainer.innerHTML = ""; // Clear existing categories

    categories.forEach((category) => {
      const label = document.createElement("label");
      label.innerHTML = `
        <input type="radio" name="category" value="${category?.value}" />
        <span>${category?.label}</span>
      `;
      categoryContainer.appendChild(label);
    });
  }
}

const form = document.getElementById("expense-form");

// Add expense to localStorage
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const dateInput = document.getElementById("date");
  const selectedDate = dateInput.value;
  const finalDate = selectedDate || new Date().toISOString().split("T")[0];

  // Store selected date in localStorage
  localStorage.setItem("selectedDate", finalDate);

  const description = document.getElementById("description").value;
  const amount = document.getElementById("amount").value;
  const paymentMethod =
    document.querySelector('input[name="payment-method"]:checked')?.value ||
    "UPI";
  const category =
    document.querySelector('input[name="category"]:checked')?.value ||
    "Unknown";

  const expense = {
    date: finalDate,
    description,
    amount,
    category,
    paymentMethod,
    timestamp: Date.now(),
  };

  // Save to localStorage
  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  expenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(expenses));

  form.reset();
  ResetDate();
});

document.querySelectorAll("input[type='text']#description").forEach((input) => {
  input.addEventListener("input", (event) => {
    event.target.value = event.target.value.replace(/\b\w/g, (char) =>
      char.toUpperCase()
    );
  });
});
