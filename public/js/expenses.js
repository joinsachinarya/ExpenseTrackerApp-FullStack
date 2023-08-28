const fetchAllExpenses = () => {
  axios
    .get("http://localhost:3000/fetchAllExpenses")
    .then((result) => {
      // console.log(result);
    })
    .catch((err) => console.error(err));
};
document.addEventListener("DOMContentLoaded", fetchAllExpenses);
