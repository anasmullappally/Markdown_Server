import { marked } from "marked";
import logger from "../config/logger.js";

export const convertMarkdown = async (req, res, next) => {
    try {
        const { markdown } = req.body;

        // Validate the input
        if (!markdown) {
            return res.status(400).json({ success: false, message: "markdown text is required" });
        }

        // Convert Markdown to HTML
        const html = marked(markdown);

        logger.info("Markdown converted successfully", { label: "convertMarkdown" });
        return res.status(200).json({ success: true, message: "converted successfully", html });

    } catch (error) {
        logger.error(error.message, { label: "convertMarkdown" });
        next(error);
    }
}