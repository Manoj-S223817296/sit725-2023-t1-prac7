let client = require("../dbConnection");
const { ObjectId } = require("mongodb");

let collection = client.db().collection("Cat");

function getAllCats(callback) {
  collection.find({}).toArray(callback);
}

function postCat(cat, callback) {
  collection.insertOne(cat, callback);
}

function deleteCat(catId, callback) {
  const objectId = new ObjectId(catId);
  collection.deleteOne({ _id: objectId }, callback);
}

module.exports = { getAllCats, postCat, deleteCat };
