const fetchAllItems = (req, res, next) => {
  res.json({ result: "Hello from controller" });
};

module.exports = {
  fetchAllItems: fetchAllItems,
};
