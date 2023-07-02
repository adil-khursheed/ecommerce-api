const { Brands } = require("../model/brandsModel");

// Fetch All Brands
exports.fetchBrands = async (req, res) => {
  try {
    const brands = await Brands.find({}).exec();
    res.status(200).json(brands);
  } catch (err) {
    res.status(400).json(err);
  }
};

// Create Brands
exports.createBrand = async (req, res) => {
  const brand = new Brands(req.body);
  try {
    const doc = await brand.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};
