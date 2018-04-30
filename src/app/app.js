import React from 'react';
//import {makeMove, newGame} from '../logic';
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
      board: [0,0,0,0,0,0,0,0,0],
      player: 'plr1',
      winner: "none"
    }
  }
  restartGameBoard = () => {
    this.setState({
      board: [0,0,0,0,0,0,0,0,0],
      player: 'plr1',
      winner: "none"
    })
  };
  makeAMove = (pos, player) => {
    if(this.state.winner !== "") { return; }
  if(this.state.board[pos]=== '1' || this.state.board[pos]=== '2'){ return; }
  let current = this.state.board;
    current.splice(pos, 1, this.state.player);
    this.setState({board: current}, function(){
      let moves = this.state.board.join('').replace(/ /g,'0');
        if(moves.length === 9) { 
          this.setState({winner: 'draw'}); 
          return;
        } else {
          var topRow = this.state.board[0] + this.state.board[1] + this.state.board[2];
          if(topRow.match(/111|222/)){
            this.setState({winner: this.state.player});
            return;
            }
          var middleRow = this.state.board[3] + this.state.board[4] + this.state.board[5];
          if(middleRow.match(/111|222/)){
            this.setState({winner: this.state.player});
            return;
          }
          var bottomRow = this.state.board[6] + this.state.board[7] + this.state.board[8];
          if(bottomRow.match(/111|222/)){
            this.setState({winner: this.state.player});
            return;
          }
          var leftCol = this.state.board[0] + this.state.board[3] + this.state.board[6];
          if(leftCol.match(/111|222/)){
            this.setState({winner: this.state.player});
            return;
          }
          var middleCol = this.state.game.board[1] + this.state.game.board[4] + this.state.game.board[7];
          if(middleCol.match(/111|222/)){
            this.setState({winner: this.state.game.player});
            return;
          }
          var rightCol = this.state.game.board[2] + this.state.game.board[5] + this.state.game.board[8];
          if(rightCol.match(/111|222/)){
            this.setState({winner: this.state.game.player});
            return;
          }
          var leftDiag = this.state.game.board[0] + this.state.game.board[4] + this.state.game.board[8];
          if(leftDiag.match(/111|222/)){
            this.setState({winner: this.state.player});
            return;
          }
          var rightDiag = this.state.board[2] + this.state.board[4] + this.state.board[6];
          if(rightDiag.match(/111|222/)){
            this.setState({winner: this.state.player});
            return;
          }
          this.setState({player: (this.state.player === '1') ? '2' : '1' });
        }
      }, this);
  }
  render(){
    return (
      <div>
        <div className="head">
          <h1>Tic-Tac-Toe</h1>
          <Message gamewinner={this.state.winner}/>
          <RestartGame 
              restart={this.restartGameBoard} />
        </div>
        {this.state.board.map((value, index) => { <Tile 
            key={index}
            pos={index}
            value={value}
            makeMove={this.makeAMove}/>
        })}
      </div>
    );
  }
}
