import mongoose, { Schema, model } from "mongoose";
import { Player } from "./types";

const PlayerSchema = new Schema<Player>({
  username: {
    type: String,
    required: [true, "is required"]
  },
  pokemon: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pokemon"
    }
  ]
}, { timestamps: true })

const Player = model<Player>("Player", PlayerSchema);

export default Player;

