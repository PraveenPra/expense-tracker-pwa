document.addEventListener("DOMContentLoaded", Start);

function Start() {
  loadExpenses();
}

const tableBody = document.querySelector("#expense-table tbody");

// Load saved expenses
function loadExpenses() {
  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  expenses.forEach(addExpenseToTable);
}

// Function to add a row to the table
function addExpenseToTable(expense) {
  const row = document.createElement("tr");
  row.innerHTML = `
  
          <td>${expense.date}</td>
          <td>${expense.amount}</td>
          <td>${expense.category}</td>
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
