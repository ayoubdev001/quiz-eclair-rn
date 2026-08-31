
import { getCategories, getByCategory } from "../models/questionModel.js";

export function getAllCategories(req, res) {

    const categories = getCategories();
    res.json(categories);
}

export function getQuestions(req, res) {
    const {category} = req.params;
    const questions = getByCategory(category);
    if (!questions) {
        return res.status(404).json({message: "Category not found"});
        }
        return res.json(questions);
}