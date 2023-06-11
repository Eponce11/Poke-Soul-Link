import { Attempt } from "./types";
import mongoose, { Schema, model } from "mongoose";

const AttemptSchema = new Schema<Attempt>({
  attemptNumber: {
    type: Number,
    required: [true, "is required"]
  },
  game: {
    type: String,
    required: [true, "is required"]
  },
  routes: {
    type: Set<string>,
    required: [true, "is required"]
  },
  players: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player"
    }
  ]
}, { timestamps: true });

const Attempt = model<Attempt>("Attempt", AttemptSchema);

export default Attempt;
