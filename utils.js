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

document.getElementById("clear-all").addEventListener("click", function () {
  if (confirm("Are you sure you want to clear all expenses?")) {
    localStorage.removeItem("expenses");
    location.reload(); // Refresh UI
  }
});
