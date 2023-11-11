import express from "express";
import mongoose from "mongoose";
import Product from "../models/Product.js";

const productRoutes = express.Router();

const getProducts = async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      throw new Error("Database connection not established.");
    }

    const products = await Product.find({});

    res.json({
      products,
      pagination: {},
    });
  } catch (error) {
    console.error(`Error fetching products: ${error.message}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

productRoutes.route("/").get(getProducts);

export default productRoutes;
