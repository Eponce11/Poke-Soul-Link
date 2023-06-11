import { Application } from "express";
import { newAttempt } from "../controllers/attempt.controllers";

const baseURL = "/api/attempt";
const attemptRoutes = (app: Application) => {
  app.get(`${baseURL}/newUser`, newAttempt);
};

export default attemptRoutes;
