const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
console.log("index file is running");

var user = require("./routes/user_route");
var admin = require("./routes/admin_route");
var categary = require("./routes/categary_route");
var product = require("./routes/product_route");
var cart = require("./routes/cart_route");
var wishlist = require("./routes/wishlist_route");

app.use("/api/user", user);
app.use("/api/admin", admin);
app.use("/api/categary", categary);
app.use("/api/product", product);
app.use("/api/cart", cart);
app.use("/api/wishlist", wishlist);


mongoose
  .connect(
    "mongodb+srv://Shubham:shubham4444@cluster.lu6ja.mongodb.net/?retryWrites=true&w=majority&appName=Cluster"
  )
  .then(() => {})
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

console.log("file is running");

app.listen(1801, () => {
  console.log("server running on port 1801");
});
