import React from 'react';
import {makeMove, newGame} from '../logic';
import { Message } from './Message';
import { Tile } from './Tile';
import RestartGame from './RestartGame';

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
      game: newGame(),
      winner: '0'
    }
  };
  gameMove(i, value){
    if(this.state.winner !== "0") { return; }
    if (value === 1 || value === 2) return;
    let moves = this.state.game.board.join('').replace(/0/g,'');
    if(moves.length === 8) { 
      this.setState({winner: 'draw'}); 
      return;
    } else {
      const newState = makeMove(this.state.game, i);
      this.setState({ game: newState });
      if(newState.board[0] === 1 && newState.board[1] === 1 && newState.board[2] === 1) {
        this.setState({winner: 'plr1'});
        return;
      } else if(newState.board[0] === 2 && newState.board[1] === 2 && newState.board[2] === 2) {
        this.setState({winner: 'plr2'});
      }
      if(newState.board[3] === 1 && newState.board[4] === 1 && newState.board[5] === 1) {
        this.setState({winner: 'plr1'});
        return;
      } else if(newState.board[3] === 2 && newState.board[4] === 2 && newState.board[5] === 2) {
        this.setState({winner: 'plr2'});
      }
      if(newState.board[6] === 1 && newState.board[7] === 1 && newState.board[8] === 1) {
        this.setState({winner: 'plr1'});
        return;
      } else if(newState.board[6] === 2 && newState.board[7] === 2 && newState.board[8] === 2) {
        this.setState({winner: 'plr2'});
      }
      if(newState.board[0] === 1 && newState.board[3] === 1 && newState.board[6] === 1) {
        this.setState({winner: 'plr1'});
        return;
      } else if(newState.board[0] === 2 && newState.board[3] === 2 && newState.board[6] === 2) {
        this.setState({winner: 'plr2'});
      }
      if(newState.board[1] === 1 && newState.board[4] === 1 && newState.board[7] === 1) {
        this.setState({winner: 'plr1'});
        return;
      } else if(newState.board[1] === 2 && newState.board[4] === 2 && newState.board[7] === 2) {
        this.setState({winner: 'plr2'});
      }
      if(newState.board[2] === 1 && newState.board[5] === 1 && newState.board[8] === 1) {
        this.setState({winner: 'plr1'});
        return;
      } else if(newState.board[2] === 2 && newState.board[5] === 2 && newState.board[8] === 2) {
        this.setState({winner: 'plr2'});
      }
      if(newState.board[0] === 1 && newState.board[4] === 1 && newState.board[8] === 1) {
        this.setState({winner: 'plr1'});
        return;
      } else if(newState.board[0] === 2 && newState.board[4] === 2 && newState.board[8] === 2) {
        this.setState({winner: 'plr2'});
      }
      if(newState.board[2] === 1 && newState.board[6] === 1 && newState.board[4] === 1) {
        this.setState({winner: 'plr1'});
        return;
      } else if(newState.board[2] === 2 && newState.board[6] === 2 && newState.board[4] === 2) {
        this.setState({winner: 'plr2'});
      }
    }
  }
  restartGameBoard = () => {
    this.setState({
      game: newGame(),
      winner: "0"
    })
  };

  render(){
    return (
      <div className="container">
        <div className="head">
          <h1>Tic-Tac-Toe</h1>
            <Message gamewinner={this.state.winner} playerturn={this.state.game.player} />
            <RestartGame restart={this.restartGameBoard} />
        </div>
        <div className="board">
          {this.state.game.board.map((tile, index) => (
              <Tile key={index} value={tile} makeyourmove={() => this.gameMove(index, tile)}/>
          ))}
        </div>
      </div>
    );
  }
}
