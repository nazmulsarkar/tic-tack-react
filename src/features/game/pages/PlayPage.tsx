import React from "react";
import Start from "./Start";
import Finished from "./Finished";
import Game from "./Game";
import useTickTackToe from "../hooks/useTicTacToe";
import { Container } from "semantic-ui-react";

export default function PlayPage() {
  const ticjTackToe = useTickTackToe();

  return (
    <Container>
      {ticjTackToe.status === "created" && (
        <Start handleStart={ticjTackToe.handleStart} />
      )}
      {ticjTackToe.status === "finished" && (
        <Finished
          name={ticjTackToe.winner}
          restart={ticjTackToe.handleRestart}
        />
      )}
      {ticjTackToe.status === "started" && (
        <Game board={ticjTackToe.board} handleClick={ticjTackToe.handleClick} />
      )}
    </Container>
  );
}
