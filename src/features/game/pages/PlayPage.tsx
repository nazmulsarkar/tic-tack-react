import React from "react";
import Start from "./Start";
import Finished from "./Finished";
import Game from "./Game";
import useTickTackToe from "../hooks/useTicTacToe";
import { Container, Grid, GridColumn, Header } from "semantic-ui-react";
// import LoadingComponent from "../../../app/layout/LoadingComponent";

export default function PlayPage() {
  const ticjTackToe = useTickTackToe();
  // if (!ticjTackToe.history.length) return <LoadingComponent />;
  return (
    <Container>
      <Grid centered>
        <GridColumn width={6}>
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
            <Game
              board={ticjTackToe.board}
              handleClick={ticjTackToe.handleClick}
            />
          )}
        </GridColumn>
      </Grid>
      <Grid centered>
        <GridColumn width={6}>
          {ticjTackToe.status === "started" && (
            <button className="ui basic button" onClick={() => ticjTackToe.resetGame()}>Reset Game</button>
          )}
        </GridColumn>
      </Grid>
      <Grid centered>
        <GridColumn width={6}>
          {ticjTackToe.status === "started" && (
            <Header as="h1">Actions Log:</Header>
          )}
          {ticjTackToe.status === "started" &&
            ticjTackToe.history &&
            ticjTackToe.history.length > 0 &&
            ticjTackToe.history.map((_step, move) => {
              const destination =
                move % 2 === 0
                  ? `Move by: ${ticjTackToe.players[0]} (X)`
                  : `Move by: ${ticjTackToe.players[1]} (O)`;
              return (
                <p key={move}>
                  <p>{destination}</p>
                </p>
              );
            })}
        </GridColumn>
      </Grid>
    </Container>
  );
}
