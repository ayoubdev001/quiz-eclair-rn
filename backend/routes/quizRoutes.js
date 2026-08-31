import express from "express";
import { getAllCategories, getQuestions } from "../controllers/quizController.js";

const router = express.Router();


router.get("/categories", getAllCategories);
router.get("/questions/:category", getQuestions);

export default router;