import express from "express";
import { home, about, contact } from "../controllers/appController.js";


const router = express.Router();

router.get("/", home);

router.get("/about", about);

router.get("/contact", contact);

export default router;
