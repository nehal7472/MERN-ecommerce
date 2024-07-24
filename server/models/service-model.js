const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  subTitle: { type: String, required: true },
  price: { type: String, required: true },
  discountPrice: { type: String, required: true },
  Available: { type: String, required: true },
  rating: { type: String, required: true },
  genre: { type: String, required: true },
  description: { type: String, required: true },
});

const Service = new model("Service", serviceSchema);

module.exports = Service;
