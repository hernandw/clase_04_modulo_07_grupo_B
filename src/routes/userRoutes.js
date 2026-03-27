import express from "express";
import { creaStudent, getAllStudents } from "../controllers/userController.js";

const router = express.Router();

router.post("/add-student", creaStudent);

router.get('/', getAllStudents)

export default router;
