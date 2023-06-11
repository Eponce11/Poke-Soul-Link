export interface Attempt {
  attemptNumber: number;
  game: string;
  routes: Set<string>;
  players: Array<Player>;
}

export interface Player {
  username: string;
  pokemon: Array<Pokemon>;
}

export interface Pokemon {
  name: string;
  route: string;
  isDead: boolean;
}
