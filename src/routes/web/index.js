import express from "express";
import Users from "../../../data/users.js";
import Products from "../../../data/products.js";

const router = express.Router();
router.get("/sign-up", (req, res) => {
  res.render("sign-up");
});
router.get("/", (req, res) => {
  res.render("home", { title: "Home Page", products: Products });
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard", { title: "Dashboard Page", users: Users });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});

router.get("/item/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = Products.find((product) => product.id === id);
  console.log(product);
  if (!product) {
    return res.status(404).send("Product not found");
  }

  res.render("item", { product: product });
});

export { router as webRouter };
