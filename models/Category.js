const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
    unique: true,
  },
});

const CategoryModel = mongoose.model("categorie", categorySchema);
module.exports = CategoryModel;
