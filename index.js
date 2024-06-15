import dotenv from "dotenv";
dotenv.config(); // Configuring dotenv

import express from "express";
import cors from "cors";
import helmet from "helmet";

// Importing routes
import markDownRoutes from "./routes/markdown.js";

import { APINotFound } from "./middleware/api-notfound.js";
import { errorHandler } from "./middleware/error-handler.js";
import logger from "./config/logger.js"; //logger import

const clientURL = process.env.CLIENT ;
const corsOptions = {
    origin: clientURL ,
    methods: "GET,PUT,PATCH,POST,DELETE",
};

// Creating an instance of express application
const app = express();

// Parsing incoming request data with extended options
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmet());

// Use CORS middleware with custom options
app.use(cors(corsOptions));

// API routes 
app.use("/api", markDownRoutes);

// Route not exist message
app.use(APINotFound);

// Middleware to handle errors
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    logger.info(`server listening at port - ${PORT}`, { label: "Server" });
});