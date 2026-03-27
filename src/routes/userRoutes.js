import express from "express";
import { creaStudent, getAllStudents, deleteStudent  } from "../controllers/userController.js";

const router = express.Router();

router.post("/add-student", creaStudent);

router.get('/', getAllStudents)

router.post('/delete/:id', deleteStudent)

export default router;
