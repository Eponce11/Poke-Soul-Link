import { Schema, model } from "mongoose";
import { Pokemon } from "./types";

const PokemonSchema = new Schema<Pokemon>({
  name: {
    type: String,
    required: [true, "is required"]
  },
  route: {
    type: String,
    required: [true, "is required"]
  },
  isDead: {
    type: Boolean,
    required: [true, "is required"]
  }
}, { timestamps: true })

const Pokemon = model<Pokemon>("Pokemon", PokemonSchema);

export default Pokemon;




