const fetchAllItems = () => {
  axios
    .get("http://localhost:3000/fetchAllItems")
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.error(err));
};

document.addEventListener("DOMContentLoaded", fetchAllItems);
