import useMultiply from "../hooks/useMultiply";

export default function PlayerButton() {
  const playerControl = useMultiply();

  type handleClickType = () => void;

  const handleClick: handleClickType = () => {
    playerControl.multiply();
  };

  return (
    <div>
      <h1>Player Stats:</h1>
      <h3>{playerControl.player}</h3>
      <h3>{playerControl.playerInc}</h3>
      <button type="button" onClick={handleClick}>
        Player Increase
      </button>
    </div>
  );
}
