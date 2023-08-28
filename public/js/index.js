const form = document.getElementById("form");
const totalExpenseValue = document.getElementById("total-expense-value");

const addExpense = (e) => {
  e.preventDefault();

  const expense = {
    name: e.target.name.value,
    category: e.target.category.value,
    price: e.target.price.value,
    quantity: e.target.quantity.value,
  };
  axios
    .post("http://localhost:3000/addExpense", expense)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.error(err);
    });
  window.location.pathname = "/public/html/expenseAdded.html";
};

const totalExpense = () => {
  axios
    .get("http://localhost:3000/fetchTotalExpense")
    .then((res) => {
      totalExpenseValue.textContent = `₹ ${res.data} / - Only`;
    })
    .catch((err) => console.error(err));
};

form.addEventListener("submit", addExpense);
document.addEventListener("DOMContentLoaded", totalExpense);
