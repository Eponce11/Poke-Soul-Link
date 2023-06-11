import express, { Application } from "express";
import cors from "cors";
import dotenv from 'dotenv'
import { attemptRoutes } from "./routes";
import dbConnection from "./config/mongoose.config";

const app: Application = express();
const PORT: Number = 8000;

// middleware
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000" }));


// DB Connection
dbConnection(process.env.DATABASE);

//Routes
attemptRoutes(app);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));