import express from "express";
import {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controller/product.route.js";

const router = express.Router();
router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
