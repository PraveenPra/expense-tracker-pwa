document.addEventListener("DOMContentLoaded", Start);

function Start() {
  ResetDate();
}

function ResetDate() {
  // Set today's date as the default value for the date input
  const dateInput = document.getElementById("date");
  const today = new Date().toISOString().split("T")[0];
  dateInput.value = today;
}

const form = document.getElementById("expense-form");

// Add expense to localStorage
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const date =
    document.getElementById("date").value ||
    new Date().toISOString().split("T")[0];
  const description = document.getElementById("description").value;
  const amount = document.getElementById("amount").value;
  const paymentMethod =
    document.querySelector('input[name="payment-method"]:checked')?.value ||
    "UPI";
  const category =
    document.querySelector('input[name="category"]:checked')?.value ||
    "Unknown";

  const expense = {
    date,
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
