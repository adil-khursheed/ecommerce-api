const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    min: [0, "Wrong minimum price"],
    max: [10000, "Wrong maximum price"],
    required: true,
  },
  discountPercentage: {
    type: Number,
    min: [1, "Wrong minimum discount"],
    max: [99, "Wrong maximum discount"],
  },
  rating: {
    type: Number,
    min: [0, "Wrong minimum rating"],
    max: [5, "Wrong maximum rating"],
    default: 0,
  },
  stock: {
    type: Number,
    min: [0, "Wrong minimum stock"],
    default: 0,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
});

const virtual = productSchema.virtual("id");

virtual.get(function () {
  return this._id;
});

productSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

exports.Product = mongoose.model("Product", productSchema);
