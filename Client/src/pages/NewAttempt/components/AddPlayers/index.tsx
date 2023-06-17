import { useState } from "react";

const AddPlayers = (props: any) => {
  const { setCurrentStep, players, setPlayers } = props;

  const [playerUsername, setPlayerUsername] = useState<string>("");

  const handleAddingPlayer = (e: any) => {
    e.preventDefault();
    setPlayers((prev: any) => [...prev, playerUsername]);
    setPlayerUsername("");
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => setPlayerUsername(e.target.value)}
        value={playerUsername}
      />
      <ol>
        {players.map( (player:any, idx:number) => (
          <li key={idx}>{player}</li>
        ))}
      </ol>
      <button onClick={handleAddingPlayer}>Add</button>
      <button onClick={() => setCurrentStep((prev: number) => prev - 1)}>
        Back
      </button>
      <button onClick={() => setCurrentStep((prev:number) => prev + 1)}>Next</button>
    </>
  );
};

export default AddPlayers;
