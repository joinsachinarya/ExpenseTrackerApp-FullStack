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

const totalExpens = () => {
  console.log("fetched total expense");
};
form.addEventListener("submit", addExpense);

document.addEventListener("DOMContentLoaded", totalExpens);
