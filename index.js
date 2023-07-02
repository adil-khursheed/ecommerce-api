const express = require("express");
const mongoose = require("mongoose");
const productsRouter = require("./routes/productRoutes.js");
const categoriesRouter = require("./routes/categoryRoutes.js");
const brandRouter = require("./routes/brandRoutes.js");
const cors = require("cors");

const server = express();

// middlewares
server.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);
server.use(express.json()); //to parse req.body
server.use("/products", productsRouter.router);
server.use("/categories", categoriesRouter.router);
server.use("/brands", brandRouter.router);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  console.log("Database connected!");
}

server.get("/", (req, res) => {
  res.json({ status: "success" });
});

server.listen(8080, () => {
  console.log("Server Started!");
});
