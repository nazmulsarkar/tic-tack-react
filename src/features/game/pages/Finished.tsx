interface Props {
  name: string | null;
  restart(): void;
}
const Finished = (props: Props) => {
  const { name, restart } = props;
  return (
    <div className='ui '>
      <h1 className='ui header'>
        {name && `Player ${name} won the game`}
        {!name && "It's a tie "}
      </h1>
      <button onClick={restart} className='ui button'>Restart</button>
    </div>
  );
};
export default Finished;
