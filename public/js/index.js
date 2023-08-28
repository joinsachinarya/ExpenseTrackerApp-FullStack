const form = document.getElementById("form");

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
    .then((reuslt) => {
      console.log(reuslt);
    })
    .catch((err) => {
      console.error(err);
    });
};

const totalExpense = () => {
  axios
    .get("http://localhost:3000/fetchTotalExpense")
    .then()
    .catch((err) => console.error(err));
};

form.addEventListener("submit", addExpense);
document.addEventListener("DOMContentLoaded", totalExpense);
