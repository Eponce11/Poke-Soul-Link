import express, { Application } from "express";
import cors from "cors";

const app: Application = express();
const PORT: Number = 8000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000" }));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
