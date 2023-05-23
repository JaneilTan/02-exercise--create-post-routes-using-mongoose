const express = require("express");
const app = express();
const WishlistModel = require("./models/WishlistModel");
const OrderModel = require("./models/OrderModel");
const PolicyModel = require("./models/PolicyModel");

app.use(express.json());

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