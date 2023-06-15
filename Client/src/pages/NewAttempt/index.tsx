import { useState } from "react";
import { SelectGen, SelectGame, AddPlayers } from "./components";

const NewAttempt = () => {
  const [selectedGen, setSelectedGen] = useState<string>("1");
  const [gameVersion, setGameVersion] = useState<string>("");
  const [players, setPlayers] = useState<Array<string>>([]);
  const [currentStep, setCurrentStep] = useState<number>(1);

  return (
    <div className="h-full w-full bg-[#050511] flex justify-center items-center">
      <div className="h-64 w-[400px] bg-white rounded p-6">
        {currentStep === 1 && (
          <SelectGen
            setSelectedGen={setSelectedGen}
            setCurrentStep={setCurrentStep}
          />
        )}
        {currentStep === 2 && (
          <SelectGame
            setCurrentStep={setCurrentStep}
            selectedGen={selectedGen}
            setGameVersion={setGameVersion}
          />
        )}
        {currentStep === 3 && (
          <AddPlayers
            setCurrentStep={setCurrentStep}
            players={players}
            setPlayers={setPlayers}
          />
        )}
      </div>
    </div>
  );
};

export default NewAttempt;
