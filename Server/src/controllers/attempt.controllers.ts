import { Request, Response } from "express";

const newAttempt = (req: Request, res: Response): any => {
  return res.json({ msg: "Success" });
};

export { newAttempt };
