import { useState, useMemo, FormEvent } from "react";
interface Props {
  handleStart(players: string[]): void;
}
const Start = (props: Props) => {
  const { handleStart } = props;
  const [players, setPlayers] = useState(["One", "Two"]);
  const handleInput = (event: FormEvent<HTMLInputElement>, index: number) => {
    const newPlayers = [...players];
    newPlayers.splice(index, 1, event.currentTarget.value);
    setPlayers(newPlayers);
  };
  const canStart = useMemo(
    () => players.every((player) => player && player.length > 0),
    [players]
  );
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canStart) return;
    handleStart(players);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className='ui form'>
        <div className="field">
          <label htmlFor="player1" className='ui label'>Player 1</label>
          <input
            className=""
            type="text"
            value={players[0]}
            onInput={(e) => handleInput(e, 0)}
          />
        </div>
        <div className="field">
          <label htmlFor="player2" className='ui label'>Player 2</label>
          <input
            type="text"
            value={players[1]}
            onInput={(e) => handleInput(e, 1)}
          />
        </div>
          <button type="submit" className='ui primary basic button' disabled={!canStart}>
            Start
          </button>
      </form>
    </div>
  );
};
export default Start;
