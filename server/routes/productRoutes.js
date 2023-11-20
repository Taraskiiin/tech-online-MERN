import express from "express";
import mongoose from "mongoose";
import Product from "../models/Product.js";

const productRoutes = express.Router();

const getProducts = async (req, res) => {
  const page = parseInt(req.params.page);
  const petPage = parseInt(req.params.perPage);

  const products = await Product.find({});

  if (page && perPage) {
    const totalPages = Math.ceil(products.lenght / perPage);
    const startIndex = (page - 1) * petPage;
    const endIndex = startIndex + perPage;
    const paginationProducts = products.slice(startIndex, endIndex);
    res.json({
      products: paginationProducts,
      pagination: { currentPage: page, totalPages },
    });
  } else {
    res.json({ products, pagination: {} });
  }
};

productRoutes.route("/:page/:perPage").get(getProducts);
productRoutes.route("/").get(getProducts);

export default productRoutes;
