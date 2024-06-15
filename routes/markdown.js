import express from "express";
import { convertMarkdown } from "../controller/markdown.js";
const router = express.Router();

router.post("/convert", convertMarkdown);

export default router;