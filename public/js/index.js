const form = document.getElementById("form");
const fetchAllItems = () => {
  axios
    .get("http://localhost:3000/fetchAllItems")
    .then((result) => {
      // console.log(result);
    })
    .catch((err) => console.error(err));
};

const addItem = (e) => {
  e.preventDefault();
  const item = {
    name: e.target.name.value,
    price: e.target.price.value,
  };
  axios
    .post("http://localhost:3000/addItem", {
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

form.addEventListener("submit", addItem);
document.addEventListener("DOMContentLoaded", fetchAllItems);
