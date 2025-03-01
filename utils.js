// Download CSV
document.getElementById("download-csv").addEventListener("click", function () {
  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  if (expenses.length === 0) return alert("No expenses to download.");

  let csv = "Date,Amount,Category,Description,Payment Method, Timestamp\n";
  expenses.forEach((exp) => {
    csv += `${exp.date},${exp.amount},${exp.category},${exp.description},${exp.paymentMethod},${exp.timestamp}\n`;
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "expenses.csv";
  a.click();
});

// Download JSON
document.getElementById("download-json").addEventListener("click", function () {
  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  if (expenses.length === 0) return alert("No expenses to download.");

  const blob = new Blob([JSON.stringify(expenses, null, 2)], {
    type: "application/json",
  });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "expenses.json";
  a.click();
});

document.getElementById("clear-all").addEventListener("click", function () {
  if (confirm("Are you sure you want to clear all expenses?")) {
    localStorage.removeItem("expenses");
    location.reload(); // Refresh UI
  }
});
