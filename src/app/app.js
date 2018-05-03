import React from 'react';
import {makeMove, newGame} from '../logic';
import { Message } from './Message';
import { Tile } from './Tile';
import { RestartGame } from './RestartGame';

/*
The main game App! It should have a TicTacToe game state in its component state,
and use the Tile and Message components to render the game.
Then the `makeMove` function from the logic layer should be used to update the
game state as the tiles are being clicked.
The user should also be able to reset the game.
The App component should render an outer element with a `container` CSS class,
and all tiles in an element with a `board` CSS class.
*/

export default class App extends React.Component {

  constructor() {
    super();
    this.state = { 
      game: newGame()
    }
  };
  gameMove(i, value){
    if(this.state.game.winner !== 0) { return; }
    if (value === 1 || value === 2) return;
    const newState = makeMove(this.state.game, i);
    this.setState({ game: newState });
  }
  restartGameBoard = () => {
    this.setState({
      game: newGame()
    })
  };
  render(){
    return (
      <div className="container">
        <div className="head">
          <h1>Tic-Tac-Toe</h1>
            <Message gamewinner={this.state.game.winner} playerturn={this.state.game.player} board={this.state.game.board} />
            <RestartGame restart={this.restartGameBoard} />
        </div>
        <div className="board">
          {this.state.game.board.map((tile, index) => (
              <Tile key={index} value={tile} makeyourmove={() => this.gameMove(index, tile)} win={this.state.game.line.includes(index)}/>
          ))}
        </div>
      </div>
    );
  }
}