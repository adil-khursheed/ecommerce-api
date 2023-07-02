const express = require("express");
const {
  fetchCategory,
  createCategory,
} = require("../controllers/categoryController");

const router = express.Router();

router.get("/", fetchCategory).post("/", createCategory);

exports.router = router;
