import express from "express"
import Users from "../../../data/users.js";
import Products from "../../../data/products.js";


const router = express.Router();
router.get("/sign-up", (req, res) => {
    res.render("sign-up")
});
router.get("/", (req, res) => {
    res.render("home", {title: "Home Page", products: Products})
});

router.get("/dashboard", (req, res)=> {
    res.render("dashboard", {title: "Dashboard Page", users: Users})
});

router.get("/about", (req, res)=> {
    res.render("about", {title: "About Page"})
})


export {router as webRouter}