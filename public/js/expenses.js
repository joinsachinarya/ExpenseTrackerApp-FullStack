const expensesList = document.getElementById("expenses-list");

function createAndShowExpens(expense) {
  const li = document.createElement("li");
  li.id = "expense-item";
  li.className = "list-group p-4";

  const createSpan = (content) => {
    const span = document.createElement("span");
    span.textContent = content;
    return span;
  };

  const deleteButton = document.createElement("button");
  const editButton = document.createElement("button");
  deleteButton.className = "btn btn-danger";
  editButton.className = "btn btn-warning     ";
  deleteButton.textContent = `Delete`;
  editButton.textContent = `Edit`;

  deleteButton.addEventListener("click", () => deleteExpense(expense.id));
  editButton.addEventListener("click", () => editExpense(expense.id));

  li.appendChild(createSpan(`Name: ${expense.name}`));
  li.appendChild(createSpan(`Category: ${expense.category}`));
  li.appendChild(createSpan(`Quantity: ${expense.quantity}`));
  li.appendChild(createSpan(`Price: ${expense.price}`));
  li.appendChild(deleteButton);
  li.appendChild(editButton);

  expensesList.appendChild(li);
}

function showAllExpenses(expenses) {
  expenses.forEach((expense) => {
    createAndShowExpens(expense);
  });
}

const fetchAllExpenses = () => {
  axios
    .get("http://localhost:3000/fetchAllExpenses")
    .then((result) => {
      showAllExpenses(result.data);
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
document.addEventListener("DOMContentLoaded", fetchAllExpenses);
