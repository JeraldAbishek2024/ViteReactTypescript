import { useEffect, useState } from "react";

const useMultiply = () => {
  const [player, setPlayer] = useState<number>(1);
  const [playerInc, setPlayerInc] = useState<number>(0);

  useEffect(() => {
    setPlayer((prev) => prev * 2);
  }, [playerInc]);

  function multiply() {
    setPlayerInc((prev) => prev + 2);
  }

  return { player, playerInc, multiply };
};

export default useMultiply;
