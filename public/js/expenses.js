const fetchAllExpenses = () => {
  axios
    .get("http://localhost:3000/fetchAllExpenses")
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.error(err));
};

const fetchExpense = (id) => {
  axios
    .get(`http://localhost:3000/fetchExpense/${id}`)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.error(err));
};

const deleteExpense = (id) => {
  axios
    .delete(`http://localhost:3000/deleteExpense/${id}`)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.error(err));
};

const editExpense = (id) => {
  const updatedValues = {
    name: "Goa",
    category: "trip",
    quantity: 2,
    price: 2500,
  };
  axios
    .put(`http://localhost:3000/editExpense/${id}`, updatedValues)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.error(err);
    });
};

// editExpense(1);
// deleteExpense(2);
// fetchExpense(1);
// document.addEventListener("DOMContentLoaded", fetchAllExpenses);
