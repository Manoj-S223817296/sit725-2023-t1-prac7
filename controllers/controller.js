let collection = require("../models/cat");

const getAllCats = (req, res) => {
  collection.getAllCats((error, result) => {
    if (!error) {
      res.json({ statusCode: 200, data: result, message: "success" });
    }
  });
};

const postCat = (req, res) => {
  let cat = req.body;
  collection.postCat(cat, (error, result) => {
    if (!error) {
      res.json({ statusCode: 201, data: result, message: "success" });
    }
  });
};

const deleteCat = (req, res) => {
  let catId = req.params.id;
  collection.deleteCat(catId, (error, result) => {
    if (!error) {
      res.json({ statusCode: 200, message: "Success" });
    }
  });
};

module.exports = { getAllCats, postCat, deleteCat };
