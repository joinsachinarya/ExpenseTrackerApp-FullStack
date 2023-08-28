const form = document.getElementById("form");

const addExpense = (e) => {
  e.preventDefault();
  const Expense = {
    name: e.target.name.value,
    price: e.target.price.value,
  };
  axios
    .post("http://localhost:3000/addExpense", {
      name: e.target.name.value,
      price: e.target.price.value,
    })
    .then((reuslt) => {
      console.log(reuslt);
    })
    .catch((err) => {
      console.error(err);
    });
};

form.addEventListener("submit", addExpense);
