exports.fetchAllItems = (req, res, next) => {
  res.json({ result: "Hello from controller" });
};

exports.addItem = (req, res, next) => {
  const itemDetails = {
    name: req.body.name,
    price: req.body.price,
  };
  console.log(req.body);
  res.json(itemDetails);
};
