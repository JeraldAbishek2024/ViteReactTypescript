import useMultiply from "../hooks/useMultiply";

export default function PlayerButton() {
  const playerControl = useMultiply();

  type handleClickType = () => void;

  const handleClick: handleClickType = () => {
    playerControl.multiply();
  };

  return (
    <div>
      <h1>Custom Hook:</h1>
      <h3>{playerControl.player}</h3>
      <h3>{playerControl.playerInc}</h3>
      <button type="button" onClick={handleClick}>
        Multiply & Increase
      </button>
    </div>
  );
}
