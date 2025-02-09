document.addEventListener("DOMContentLoaded", loadExpenses);

const form = document.getElementById("expense-form");
const tableBody = document.querySelector("#expense-table tbody");

// Load saved expenses
function loadExpenses() {
  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  expenses.forEach(addExpenseToTable);
}

// Add expense to table & localStorage
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const date =
    document.getElementById("date").value ||
    new Date().toISOString().split("T")[0];
  const description = document.getElementById("description").value;
  const amount = document.getElementById("amount").value;
  const paymentMethod =
    document.getElementById("payment-method").value || "UPI";

  const expense = { date, description, amount, paymentMethod };

  // Save to localStorage
  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  expenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(expenses));

  addExpenseToTable(expense);
  form.reset();
});

// Function to add a row to the table
function addExpenseToTable(expense) {
  const row = document.createElement("tr");
  row.innerHTML = `
        <td>${expense.date}</td>
        <td>${expense.description}</td>
        <td>${expense.amount}</td>
        <td>${expense.paymentMethod}</td>
        <td><button onclick="deleteExpense(this)">❌</button></td>
    `;
  tableBody.appendChild(row);
}

// Delete expense
function deleteExpense(button) {
  const row = button.parentElement.parentElement;
  const desc = row.cells[1].innerText;

  // Remove from localStorage
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  expenses = expenses.filter((exp) => exp.description !== desc);
  localStorage.setItem("expenses", JSON.stringify(expenses));

  row.remove();
}

// Download CSV
document.getElementById("download-csv").addEventListener("click", function () {
  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  if (expenses.length === 0) return alert("No expenses to download.");

  let csv = "Date,Description,Amount,Payment Method\n";
  expenses.forEach((exp) => {
    csv += `${exp.date},${exp.description},${exp.amount},${exp.paymentMethod}\n`;
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "expenses.csv";
  a.click();
});
