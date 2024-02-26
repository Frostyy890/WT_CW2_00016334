import express from "express"
import Users from "../../../data/users.js";

const router = express.Router();
router.get("/sign-up", (req, res) => {
    res.render("sign-up")
});
router.get("/", (req, res) => {
    res.render("home", {title: "Home Page", users: Users})
});
 
export {router as webRouter}