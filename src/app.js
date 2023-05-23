const express = require("express");
const app = express();
const WishlistModel = require("./models/WishlistModel");
const OrderModel = require("./models/OrderModel");
const PolicyModel = require("./models/PolicyModel");


app.use(express.json());

app.post("/wishlists", (request, response) => {
  const { body } = request;
  const wishlist = new WishlistModel(body);
  wishlist.save();
  return response.status(200).send(wishlist);
});

app.post("/orders", (request, response) => {
  const { body } = request;
  const orders = new OrderModel(body);
  orders.save();
  return response.status(200).send(orders);
});

app.get("/wishlists/:id", async (req, res) => {
  const { id } = req.params;
  const wishlist = await WishlistModel.findById(id);
  return res.status(200).send(wishlist);
});

app.get("/orders/:id", async (req, res) => {
  const { id } = req.params;
  const order = await OrderModel.findById(id);
  return res.status(200).send(order);
});

app.get("/policies/:id", async (req, res) => {
  const { id } = req.params;
  const order = await PolicyModel.findById(id);
  return res.status(200).send(order);
});




module.exports = app;
