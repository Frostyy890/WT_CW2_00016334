import express from "express";
import { SignUp } from "../../controllers/auth/index.js";

const router = express.Router();
// AUTHENTICATION
router.post("/auth/sign-up", SignUp)


export {router as  apiRouter};